// var encodedData = window.btoa('Hello, world'); // encode a string
// console.log(encodedData)
// var decodedData = window.atob(encodedData); // decode the string
// console.log(decodedData)

var url_string = window.location.href
var url = new URL(url_string)
var data = url.searchParams.get("data")
var re = new RegExp(';');
myArray = data.split(re);