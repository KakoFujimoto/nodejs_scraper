const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");


const app = express();
const data = [];

// スクレイピングのメソッド
const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";

axios.get(URL)
.then((response) =>{
    const htmlParser = response.data;
    console.log(htmlParser);

    const $ = cheerio.load(htmlParser);

    $(".searchresultitem" ,htmlParser).each(function(){
        const title = $(this).find(".title").text();
        console.log(title);
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // エラーが発生した場合にログに出力する
    });
});

app.listen(PORT, console.log("surver is running!"));