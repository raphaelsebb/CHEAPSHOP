var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

module.exports=function(url){

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            var picture1, picture2, picture3, price1, price2, price3, url1, url2, url3;
            var json = {
                picture1 : "", price1 : "", url1 : "",
                picture2 : "", price2 : "", url2 : "",
                picture3 : "", price3 : "", url3 : ""
            };

            var link_picture1 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(1) > a > div.img-wrap > img";
            var link_picture2 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(2) > a > div.img-wrap > img"
            var link_picture3 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(3) > a > div.img-wrap > img"
            var link_price1 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(1) > div > div.price-wrap.price-previous > span.price";
            var link_price2 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(2) > div > div.price-wrap.price-previous > span.price";
            var link_price3 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(3) > div > div.price-wrap.price-previous > span.price";
            var link_url1 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(1) > a"
            var link_url2 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(2) > a"
            var link_url3 = "#productlist-results > div > div.results.three-grid > ul > li:nth-child(3) > a"

            $(link_url1).each(function(){
                var data = $(link_url1);
                var selector_url1 = data.attr("href");
                json.url1 = selector_url1;
            })
            $(link_url2).each(function(){
                var data = $(link_url2);
                var selector_url2 = data.attr("href");
                json.url2 = selector_url2;
            })
            $(link_url3).each(function(){
                var data = $(link_url3);
                var selector_url3 = data.attr("href");
                json.url3 = selector_url3;
            })

            $(link_picture1).each(function(){
                var data = $(link_picture1);
                var selector_picture1 = data.attr("src");
                json.picture1 = selector_picture1;
            })
            $(link_picture2).each(function(){
                var data = $(link_picture2);
                var selector_picture2 = data.attr("src");
                json.picture2 = selector_picture2;
            })
            $(link_picture3).each(function(){
                var data = $(link_picture3);
                var selector_picture3 = data.attr("src");
                json.picture3 = selector_picture3;
            })

            $(link_price1).each(function(){
                var data = $(link_price1);
                var selector_price1 = data.text().trim();
                selector_price1 = selector_price1;
                json.price1 = selector_price1;
            })
            $(link_price2).each(function(){
                var data = $(link_price2);
                var selector_price2 = data.text().trim();
                selector_price2 = selector_price2;
                json.price2 = selector_price2;
            })
            $(link_price3).each(function(){
                var data = $(link_price3);
                var selector_price3 = data.text().trim();
                selector_price3 = selector_price3;
                json.price3 = selector_price3;
            })
        }

        fs.writeFile('www/asosOutput.json', JSON.stringify(json, null, 4), function(err, res){
          console.log('File asosOutput.json successfully written!');
        });
    })
}
