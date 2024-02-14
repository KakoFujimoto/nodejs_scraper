const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");


const app = express();

// スクレイピングのメソッドを書いていく
const URL = "https://search.rakuten.co.jp/search/mall/%E3%83%AF%E3%83%83%E3%83%95%E3%83%AB/100283/";

axios(URL).then((response) =>{
    const htmlParser = response.data;
    console.log(htmlParser);
});

app.listen(PORT, console.log("surver is running!"));