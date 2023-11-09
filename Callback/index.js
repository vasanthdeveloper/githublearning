//Inbuilt asynchronous function
console.log("H");
setTimeout(()=>{
    console.log("L");
},3000);
setTimeout(()=>{
    console.log("E");
},2000);
setTimeout(()=>{
    console.log("O");
},5000);
setTimeout(()=>{
    console.log("L");
},4000);
//--------------------------------------------------------------------------------
console.log("App is starting...");
setTimeout(function timer(){
    console.log("App is middle1")
},2000);
console.log("App is starting1");
setTimeout(function timerout(){
    console.log("App is middle2")
},5000);
console.log("App is lasting");
console.log("App is lasting");
console.log("App is lasting");

