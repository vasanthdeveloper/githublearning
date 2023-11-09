function poo(){
    return new Promise((resolve,reject)=>reject("this is a foo inside resolve"));
}
poo().then((data)=>console.log(data)).catch((error)=>console.log(error));


function foo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("this is resolved for foo"),3000);
    });
}
foo().then((data)=>console.log(data)).catch((error)=>console.log(error));