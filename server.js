/*
* Server Node.js
*
* Edited by Akira Quenot, Raphael Sebban
* Version 1.0
*
*/


//Javascript scraper
var scrapeAsos    = require('./scrapeAsos.js');
var scrapeHm      = require('./scrapeHm.js');
var scrapeNewLook = require('./scrapeNewLook.js');
var scrapeAll     = require('./scrapeAll.js')
var defineUrls    = require('./defineUrls');

//Node.js Modules
var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.use(express.static('www'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
})

app.get('/process_get', function (req, res) {
    scrapeAll(req, function(err){
        res.sendFile(__dirname + "/www/index.html");
    });
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port);
})
