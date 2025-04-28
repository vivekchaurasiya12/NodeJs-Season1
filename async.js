const fs = require('fs');
const https = require('https');


console.log("Hello World!");
var a = 122;
var b = 2;

https.get('https://api.github.com', (res) => {
    console.log("fetched successfully");
});

setTimeout(() => {
    console.log("Timeout finished after 5 seconds");
},5000);

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log("file data :", data);
});

function multiply(a, b) {
    var result = a * b;
    return result;
}
const c = multiply(a, b);
console.log("multiplication result",c);