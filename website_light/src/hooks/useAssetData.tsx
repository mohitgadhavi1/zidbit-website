import { useEffect, useState } from "react";
import { formatDollars } from "@/helper/currencyConvertion";
import { findIconUrl } from "@/helper/findIconUrl";
import { API_KEY, coinAPI } from "@/services";

interface DataType {
  key: string;
  "#": number;
  name: string;
  exchange_id: number;
  volume_1day_usd: number;
  price: number;
}

async function fetchData(url: string | URL | Request, customHeaders = {}) {
  return fetch(url, {
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      ...customHeaders,
    },
  });
}

async function fetchIcons() {
  try {
    const res = await fetchData(coinAPI.assetIcons());
    if (!res.ok) {
      return null;
    }
    const responseData = await res.json();
    return responseData.data;
  } catch (error) {
    return null;
  }
}

function formatData(data: any[], icons: any, type: string): DataType[] {
  return data
    .filter((item) => {
      return (
        (type === "crypto"
          ? item.type_is_crypto === 1
          : item.type_is_crypto === 0) &&
        item.uuid &&
        item.volume.volume_1day_usd !== 0 &&
        Number(item.price) > 0.00001
      );
    })
    .map((item, index) => {
      return {
        ...item,
        key: `item-${index + 1}`,
        rank: index + 1,
        volume_1day_usd: formatDollars(item.volume.volume_1day_usd),
        price_usd: Number(item.price).toFixed(4),
        icon: findIconUrl(icons, item),
      };
    })
    .filter((item) => item.icon.length > 0);
}

function useAssetData(type: string) {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);

      try {
        const [pricesResponse, iconsData] = await Promise.all([
          fetchData(coinAPI.assets()),
          fetchIcons(),
        ]);

        if (!pricesResponse.ok) {
          setLoading(false);
          setError(true);
          return;
        }

        const pricesData = await pricesResponse.json();
        const filteredData = formatData(pricesData.data, iconsData, type);

        setData(filteredData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    getData();
  }, [type]);

  return { data, loading, error };
}

export default useAssetData;
