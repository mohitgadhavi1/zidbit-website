// const baseurl = "http://localhost:3000" 
const baseurl = "http://localhost:3001/" 
export const finnhubBaseURL = "https://finnhub.io/api/v1";

//===================================================================//
const apiDirectory = "api/marketdata/"

export const API_KEY = "78879775-aef8-417b-8497-618dfd4ed916";

export const coinAPI = {

    // assetPrice: function () {
    //   return `${baseurl}${apiDirectory}assetPrice`;`
    // },
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
    historicalData : function () {
      return `${baseurl}${apiDirectory}exchangeIcons`;
    }
  };

  export const coinRanking = {

    assetList: function () {
      return `${baseurl}${apiDirectory}assets`;
    },
    assetDetails: function (id: string,timePeriod: string) {
      return `${baseurl}${apiDirectory}asset/${id}?period=${timePeriod}`;
    },
    assetHistory: function (id: string,timePeriod: string)  {
      return `${baseurl}${apiDirectory}asset/${id}/history?period=${timePeriod}`;
    },

  };

  export const cryptoNews =()=> `${baseurl}api/crypto_news/coindesk`;


  //================================================================//










