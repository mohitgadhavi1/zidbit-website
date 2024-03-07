//must header = Accept: application/json
//optional header = Accept-Encoding: deflate, gzip
const coinAPI = {
  base_url: "https://rest.coinapi.io/v1/",
  exchangerate: (asset_id_base) =>
    `${coinAPI.base_url}exchangerate/${asset_id_base}`,
  assets: function () {
    return `${this.base_url}assets`;
  },
  assetsPrice: function (includeSupply = false) {
    return `${this.base_url}assets?include_supply=${includeSupply}`;
  },
  symbols: function () {
    return `${this.base_url}symbols`;
  },
  exchanges: function () {
    return `${this.base_url}exchanges`;
  },
  assetIcons: function () {
    return `${this.base_url}assets/icons/100`;
  },
  exchangeIcons: function () {
    return `${this.base_url}exchanges/icons/100`;
  },
};

const coinRanking = {
  base_url: "https://coinranking1.p.rapidapi.com/",

  assets: function () {
    return `${this.base_url}coins`;
  },
  assetDetails: function (id) {
    return `${this.base_url}coin/${id}`;
  },

  /**
   * @param {string} referenceCurrencyUuid - currency default US:yhjMzLPhuIDl
   * @param {string} timePeriod - 1h, 3h, 12h, 24h, 7d, 30d, 3m, 1y, 3y, 5y
   * @returns {Promise<Object>} Response object
   */

  assetHistory: function (id) {
    return `${this.base_url}coin/${id}/history`;
  },
};

const cryptoNewsApi = (source) =>
  `https://cryptocurrency-news2.p.rapidapi.com/v1/${source}`;

module.exports = { coinAPI, coinRanking, cryptoNewsApi };
