//  <button type="button" on="foo()">click me</button> 
var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="clickme";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    console.log("hello world");
}