const fs=require("fs");

//create a file
const content="hello world"
fs.writeFile("demo.txt",content,(err)=>{
    console.log("written");
});

//read a file
fs.readFile("./demo.txt","utf-8",(err,data)=>{
    if(err)
    console.log(err);
    console.log("the conent inside a file is=>",data);
});