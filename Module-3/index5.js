var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click Me";
button.addEventListener("click",foo)
document.body.append(button);

function foo(){
    console.log("Hello World...!");
    alert("yes");
}

// var button1=document.createElement("button");
// button1.setAttribute("type","button");
// button.innerHTML="Click Me1";
// button.addEventListener("click",foo1)
// document.body.append(button1);

// function foo1(){
// //    input takes string soo we use parseInt
//    var ele=parseInt(prompt("enter the age"));
//    console.log(ele);
// }

var button2=document.createElement("button");
button2.setAttribute("type","button");
button.innerHTML="Click Me1";
button.addEventListener("click",foo1)
document.body.append(button1);

function foo1(){
   var ele=parseInt(prompt("enter the word"));
   var span=document.createElement("span");
   span.innerHTML=ele;
   document.body.append(span);
}

var div=document.createElement("div");
div.innerHTML="This is div";
div.addEventListener("mouseover",bar);
document.body.append(div);

function bar(){
       document.querySelector("div").style.color="red";
}