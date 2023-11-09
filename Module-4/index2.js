{/* <div class="container">
<div class="row">
    <div class="col">
        <div></div>
    </div>
</div>
</div> */} 
// create in dom above html file
var container=document.createElement("div");
container.setAttribute("class",".container");
// or container.className=".container"
var row=document.createElement("div");
row.setAttribute("class","row");
// or row.className=".row"
var col=document.createElement("div");
col.setAttribute("class","col");
var div=document.createElement("div");
col.append(div);
row.append(col);
container.append(row);
document.body.append(container);

// if you want add multiple class means like
// container.setAttribute("class","btn");
// container.setAttribute("class","btn-primary"); it gives that last we write means that only give
// that time we use
// container.classList.add("btn","btn-primary");






