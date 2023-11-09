// var div=document.createElement("div");
// div.innerHTML="this is div";
// document.body.append(div);
for(var i=0;i<20;i++){
    var div=document.createElement("div");
    div.innerHTML="This is div";
    document.body.append(div);
}
var division=document.createElement("p");
division.innerHTML="This is paragraph";
document.body.append(division);

var division1=document.createElement("div");
division1.innerHTML="this is division1";
// adding inline css in above element
division1.style.backgroundColor="green";
document.body.append(division1);

var division2=document.createElement("div");
division2.innerHTML="This is division2";
division2.setAttribute("class","main");//or--------division2.className="main";
document.body.append(division2);

//Nesting element
{/* <div>
<div>This is child</div>
</div> */}
var parent=document.createElement("div");
var child=document.createElement("div");
child.innerHTML="This is child";
parent.append(child);
document.body.append(parent);

{/* <div class="container">
    <div class="row">
        <div class="col">
            </div></div>
            </div> */}
            
var container=document.createElement("div");
container.setAttribute("class","container");//or-----container.className="container";
var row=document.createElement("div");
row.setAttribute("class","row");
var col=document.createElement("div");
col.setAttribute("class","col");
row.append(col);
container.append(row);
document.body.append(container);

//to add a multiple class
var button=document.createElement("div");
// button.setAttribute("class","btn");
// button.setAttribute("class","btn-primary");
//  ---------------------- or --------------------------
button.classList.add("btn","btn-primary");
document.body.append(button);