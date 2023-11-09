var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row";
container.append(row);
var res=fetch("https://restcountries.com/v3.1/all");
res.then((data)=>data.json()).then((data1)=>foo(data1));
function foo(data1){
    console.log(data1);
for(var i=0;i<data1.length;i++){
    row.innerHTML+=`<div class="col-md-4">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
    <div class="card-header">${data1[i].name.common}</div>
   <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</div>`;
document.body.append(container);

}
}