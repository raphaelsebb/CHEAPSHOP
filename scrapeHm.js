var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

module.exports=function(url){

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            var picture1, picture2, price1, price2;
            var json = {
                picture1 : "",
                price1 : "",
                picture2 : "",
                price2 : "",
                picture3 : "",
                price3 : ""
            };

            var link_picture1 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(1) > article > a > img";
            var link_picture2 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(2) > article > a > img"
            var link_picture3 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(3) > article > a > img"
            var link_price1 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(1) > article > div > strong";
            var link_price2 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(2) > article > div > strong";
            var link_price3 = "body > main > div > div.search.productlisting.parbase > div.product-items-wrapper > section:nth-child(1) > div > div > div:nth-child(3) > article > div > strong";

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


        fs.writeFile('www/HmOutput.json', JSON.stringify(json, null, 4), function(err, res){
          console.log('File HmOutput.json successfully written!');
      });
    })
}
