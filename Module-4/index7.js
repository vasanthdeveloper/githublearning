var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="clickme";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
     alert("this is js")
}

// ----------------------------------------------------------------------------------------------------------

var button1=document.createElement("button");
button1.setAttribute("type","button");
button1.innerHTML="clickme1";
button1.addEventListener("click",foo1);
document.body.append(button1);

function foo1(){
    var ele=parseInt(prompt("enter the age"));
    // it will be a string
    console.log(ele);
}