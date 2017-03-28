var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

module.exports=function(req){
    try{
        if(req.query.sexe == "homme") {
            var urlAsos = "http://www.asos.fr/search/"+req.query.type+"?q="+req.query.type+"&refine=floor:1001&currentpricerange=0-180&pgesize=36&sort=priceasc";
            var urlHm = "http://www2.hm.com/fr_fr/search-results.html?q="+req.query.type+"&department=men_all&sort=ascPrice&offset=0&page-size=40";
            var urlNewLook = "http://www.newlook.com/fr/search/?q="+req.query.type+":price-asc:department:Mens&page=0&sort=price-asc&content=false";
        }
        else if(req.query.sexe == "femme") {
            var urlAsos = "http://www.asos.fr/search/"+req.query.type+"?q="+req.query.type+"&refine=floor:1000&currentpricerange=0-190&pgesize=36&sort=priceasc";
            var urlHm = "http://www2.hm.com/fr_fr/search-results.html?q="+req.query.type+"&department=ladies_all&sort=stock&offset=0&page-size=40";
            var urlNewLook = "http://www.newlook.com/fr/search/?q="+req.query.type+":price-asc:department:Womens&page=0&sort=price-asc&content=false";
        }
    } finally{
        var urls = [urlAsos,urlHm,urlNewLook];
    }
}
