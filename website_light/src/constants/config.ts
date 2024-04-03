export const chartConfig: ChartConfig  = {

  "1H": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
    "1D": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
    "1W": { resolution: "15", days: 0, weeks: 1, months: 0, years: 0 },
    "1M": { resolution: "60", days: 0, weeks: 0, months: 1, years: 0 },
    "1Y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },
    "5Y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },

  };


  interface ChartConfig {
    [key: string]: {
      resolution: string;
      days: number;
      weeks: number;
      months: number;
      years: number;
    };
  }