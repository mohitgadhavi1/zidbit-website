//must header = Accept: application/json
//optional header = Accept-Encoding: deflate, gzip
const coinAPI = {
  base_url: "https://rest.coinapi.io/v1/",
  exchangerate: (asset_id_base) =>
    `${coinAPI.base_url}exchangerate/${asset_id_base}`,
  assets: function () {
    return `${this.base_url}assets`;
  },
  exchanges: function () {
    return `${this.base_url}exchanges`;
  },
};

module.exports = coinAPI;
