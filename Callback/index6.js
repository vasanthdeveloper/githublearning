// Promise.allSetteled():
// it takes the array of promises and waits untill all the promises are resolved
// The result will be array of objects with resolved states as well as rejected state
var p1=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p1 resolved"),1000);
    }
    else{
        setTimeout(()=>reject("this is p1 rejected"),3000);
    }
});
var p2=new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>resolve("this is p2 resolved"),2000);
    }
    else{
        setTimeout(()=>reject("this is p2 rejected"),3000);
    }
});
var p3=new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>resolve("this is p3 resolved"),5000);
    }
    else{
        setTimeout(()=>reject("this is p3 rejected"),3000);
    }
});

Promise.allSettled([p2,p3,p1]).then((data)=>console.log(data)).catch((error)=>console.log(error));