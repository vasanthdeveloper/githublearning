// Async and Await 
// it is the syntactic sugar way of writing the promises
// it is applicable to function
// A normal function can be converted into async function using the keyword async

// An async function always returns a promise
// Await: it is used inside async function
// it is replacement to .then()


async function bar(){
    let res=await fetch("https://restcountries.com/v3.1/all");
    let res1= await res.json();
    console.log(res1);
    }
    bar();