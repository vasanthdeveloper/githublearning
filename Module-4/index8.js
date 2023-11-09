// Color a span/div element content when a user moves the mouse over the element.
var div=document.createElement("div");
div.innerHTML="This is div";
div.addEventListener("mouseover",bar);
document.body.append(div);

function bar(){
    document.querySelector("div").style.color="red";

}

// -------------------------------------------------------------------------------------------------

// Use prompt to read a value from user and display it in the span element.

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var ele=prompt("Enter the value");
    var span=document.createElement("span");
    span.style.fontSize="32px";
    span.style.color="green";
    span.innerHTML=ele;
    document.body.append(span);
}

