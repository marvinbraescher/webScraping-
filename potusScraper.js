
const rp = require('request-promise');
const url = 'https://www.google.com.br';

rp(url)
  .then(function($){
    //success!
    console.log($);
  })
  .catch(function(err){
    //handle error
    console.log("error")
  });

const xd = require('request-promise');
const $ = require('cheerio');
const file = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

xd(file)
  .then(function(html){
    //success!
    console.log($(' <strong> > a', html).length);
    console.log($(' <strong> > a', html));
  })
  .catch(function(err){
    //handle error
    console.log("error2")
  });