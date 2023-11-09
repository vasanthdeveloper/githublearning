// var div=document.createElement("div");
// div.innerHTML="this is div";
// div.style.backgroundColor="green";
// div.style.textAlign="center";
// document.body.append(div);
                                //  or
var div=document.createElement("div");
div.innerHTML="This is div";
div.setAttribute("class","main");
var division=document.createElement("div");
division.innerHTML="This is another division";
division.setAttribute("class","main1")
// Append can take multiple values
document.body.append(div,division);

//Nesting elements
var parent=document.createElement("div");
parent.setAttribute("class","main2")
var child=document.createElement("div");
child.innerHTML="This is child";
parent.append(child);
document.body.append(parent);