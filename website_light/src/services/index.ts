// const baseurl = "http://localhost:3000" 
const baseurl = "http://localhost:3001/" 
export const streamurl = "ws://localhost:3002"
export const finnhubBaseURL = "https://finnhub.io/api/v1";

//===================================================================//
const apiDirectory = "api/marketdata/"

export const API_KEY = "78879775-aef8-417b-8497-618dfd4ed916";

export const coinAPI = {
  cryptoTopGainerLoosers: function () {
    return `${baseurl}${apiDirectory}top-gainers&loosers`;
  },
  
  cryptoState: function () {
    return `${baseurl}${apiDirectory}stats`;
  },

    assets: function () {
      return `${baseurl}${apiDirectory}assets`;
    },
    assetPrice: function () {
      return `${baseurl}${apiDirectory}assets`;
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
    historicalData : function (id: string,timePeriod: string) {
      return `${baseurl}${apiDirectory}asset/${id}/history?period=${timePeriod}`;
    }
  };

  export const coinRanking = {

    assetHistory: function (id: string,timePeriod: string)  {
      return `${baseurl}${apiDirectory}asset/${id}/history?period=${timePeriod}`;
    },

  };

  export const cryptoNews =()=> `${baseurl}api/crypto_news/coindesk`;


  //================================================================//










