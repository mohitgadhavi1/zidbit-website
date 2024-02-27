// const baseurl = "http://localhost:3000" 
const baseurl = "http://localhost:3001/" 
export const finnhubBaseURL = "https://finnhub.io/api/v1";

//===================================================================//
const apiDirectory = "api/marketdata/"

export const API_KEY = "78879775-aef8-417b-8497-618dfd4ed916";
export const coinAPI = {

      assetPrice: function () {
      return `${baseurl}${apiDirectory}assetPrice`;
    },
    exchanges: function () {
      return `${baseurl}${apiDirectory}exchanges`;
    },
    assetIcons: function () {
      return `${baseurl}${apiDirectory}assetIcons`;
    },
    exchangeIcons: function () {
      return `${baseurl}${apiDirectory}exchangeIcons`;
    },
  };


  //================================================================//










