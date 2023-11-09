// To handle failures here we have try-catch
// error handling statements


// function foo(){
//   return new Promise((resolve,reject)=>reject("this is rejected!!"));
// }
// function add(){
//   return new Promise((resolve,reject)=>resolve("this is resolved!!"));
// }

// async function bar(){
//   try {
//     let res=await foo();
//     console.log(res);
//     let res1=await add();
//     console.log(res1);
   
//   } catch (error) {
//     console.log(error);
//   }
// }
// bar();

async function bar(){
    let res=await fetch("https://api.chucknorris.io/jokes/random");
    let res1= await res.json();
    console.log(res1);
    }
    bar();