//Dependent operations
function bar(num){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(5*num),3000);  
    })
}

bar(5).then((data)=>{
    console.log(data);//output:25
    return bar(data); //bar(25) -> returns a promise
}).then((data1)=>{
    console.log(data1); //output :125
    return bar(data1); //bar(125)
}).then((data2)=>console.log(data2))
.catch((error)=>console.log(error));


