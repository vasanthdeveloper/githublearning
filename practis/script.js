console.log("App is under starting..")
setTimeout(function timer() {
    console.log('App is under construction..');    
}, 2000);

console.log("App is under deployment");

setTimeout(function timeout() {
console.log("App is under testing");
}, 5000);

setTimeout(function bye() {
    console.log('App is under construction..this is for bye');    
}, 3000);

console.log("Welcome to App.");