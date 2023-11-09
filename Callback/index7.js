// Application of Promises
// fetch and async and await

// A fetch is an alternative to XHR
// fetch takes the api as a the parameter
// performs necessary operations
// Syntax:var variable=fetch("API");

// Fetch always returns a Promise
// inside the promise we have the data in the readable stream
// data has to be converted either to array or Object/String


// To convert into object we need to have .json() method 
// .json() method always returns a promise 

// we need to use one more .then() to access the value inside the promise
// var p1=fetch("https://restcountries.com/v3.1/all");
// console.log(p1);
// var p2=p1.then((data)=>data.json());
// console.log(p2);
// p2.then((data1)=>console.log(data1))
var p1=fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((data1)=>console.log(data1));