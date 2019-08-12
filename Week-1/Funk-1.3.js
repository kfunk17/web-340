var url = require("url");

var parsedURL = url.parse("https://twitter.com/funkyk787?name=karie");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);