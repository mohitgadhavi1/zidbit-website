import { useEffect, useState } from "react";

const useStreamingData = (url: string) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [receivedMessage, setReceivedMessage] = useState<any>({});
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      setWs(socket);
    };

    socket.onmessage = (event) => {
      setReceivedMessage(JSON.parse(event.data));
    };

    socket.onerror = (error) => {
      setError(error as any);
    };

    socket.onclose = () => {
      // Set receivedMessage to empty object and handle error when socket is closed
      setReceivedMessage({});
      setError(new Error("WebSocket connection closed unexpectedly."));
    };

    // Cleanup function to close WebSocket when component unmounts
    return () => {
      if (
        socket.readyState === WebSocket.OPEN ||
        socket.readyState === WebSocket.CONNECTING
      ) {
        socket.close();
      }
    };
  }, [url]);

  useEffect(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          product_ids: ["BTC-USD", "ETH-USD"],
          channels: ["ticker"],
        })
      );
    }
  }, [ws]);

  return { receivedMessage, error };
};

export default useStreamingData;
