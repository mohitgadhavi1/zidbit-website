import { formatDollars } from "@/helper/currencyConvertion";
import { findIconUrl } from "@/helper/findIconUrl";
import { API_KEY, coinAPI } from "@/services";
import { useEffect, useState } from "react";

function fetchData(url: string | URL | Request, customHeaders = {}) {
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
      console.error(`Failed to fetch icons. Status: ${res.status}`);
      return null;
    }
    const responseData = await res.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching icons:", error);
    return null;
  }
}

function formatData(data: any[], icons: any, type: string) {
  return data
    .filter(
      (item: {
        volume: any;
        price: number;
        type_is_crypto: number;
        volume_1day_usd: number;
        uuid: string;
      }) => {
        return (
          (type === "crypto"
            ? item.type_is_crypto === 1
            : item.type_is_crypto === 0) &&
          item.uuid &&
          item.volume.volume_1day_usd !== 0 &&
          Number(item.price) > 0.00001
        );
      }
    )
    .map(
      (
        item: {
          volume: any;
          volume_1day_usd: any;
          price: any;
          asset_id: any;
        },
        index: number
      ) => {
        return {
          ...item,
          key: `item-${index + 1}`,
          rank: index + 1,
          volume_1day_usd: formatDollars(item.volume.volume_1day_usd),
          price_usd: Number(item.price).toFixed(4),
          icon: findIconUrl(icons, item),
        };
      }
    )
    .filter((item: { icon: string }) => item.icon.length > 0);
}

function useAssetData(type: string) {
  const [data, setData] = useState<DataType[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
          console.error(
            `Failed to fetch data. Status: ${pricesResponse.status}`
          );
          return;
        }

        const pricesData = await pricesResponse.json();
        const filteredData = formatData(pricesData.data, iconsData, type);

        setData(filteredData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return { data, loading, error };
}

export default useAssetData;

interface DataType {
  key: string;
  "#": number;
  name: string;
  exchange_id: number;
  volume_1day_usd: number;
  price: number;
}

// .sort(
//   (
//     a: {
//       volume: any;
//       volume_1day_usd: string;
//     },
//     b: {
//       volume: any;
//       volume_1day_usd: string;
//     }
//   ) =>
//     parseFloat(b.volume.volume_1day_usd) -
//     parseFloat(a.volume.volume_1day_usd)
// )
