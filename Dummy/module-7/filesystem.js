const fs=require("fs");//fs-filesysyem it is use to create a file

const content="hello world"
fs.writeFile("demo.txt",content,(err)=>{
    console.log("written");
});
fs.writeFile("demo.csv",content,(err)=>{
    console.log("written");
});
const quote="god is love"
for(let i=1;i<=10;i++){
    fs.writeFile(`./backup/text-${i}.html`, quote,(err)=>{
        console.log("written");
    })
}