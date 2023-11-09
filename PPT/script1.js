var div=document.createElement("div");
div.innerHTML="This is div";
// adding the inline css in the above element
{/* <div style="background-color: green;"></div> */}
// div.style.backgroundColor="green";
// div.style.textAlign="center";
div.setAttribute("class","main");
document.body.append(div);

//Nesting elements
var parent=document.createElement("div");
parent.setAttribute("class","main2")
var child=document.createElement("div");
child.innerHTML="This is child";
parent.append(child);
document.body.append(parent);