import axios from "axios";

export default function Button() {

function onChange(){
    // const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
  headers: {
    'X-RapidAPI-Key': '10c1e18cbfmsh79e64baa6789e33p1d854cjsn7a954c28943d',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};

   axios
    .request(options)
    .then(function (response) {
      console.log(response);
      const array = response.description;
      console.log(array);
      
    }).catch(function (error) {
      console.error(error);
    });    
}

  return (
    <button
      type="button"
      onClick={onChange}
      className= {'mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg  focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full'}
    >
      Show More Blogs
    </button>
  );
}