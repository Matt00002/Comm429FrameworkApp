//require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getyugiohCards(){
    const format = "tcg";
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=${ format }`
    const response = EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
    const articles = response;
    return articles;
}

module.exports = getyugiohCards;