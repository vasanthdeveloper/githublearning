var age=parseInt(prompt("enter the age"));
var p1=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you are eligible for vote");
    }else{
        reject("you are not eligible for vote");
    }
});
console.log(p1);
// below code is use to access the value of resolve/rejected value
p1.then((data)=>console.log(data)).catch((error)=>console.log(error));