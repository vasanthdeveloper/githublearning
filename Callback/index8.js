//Q1.Using rest countries API ,Print the Country Name ,Capital In the HTML file in a simple HTML tag
var p1=fetch("https://restcountries.com/v3.1/all") //it is a promise
.then((data)=> data.json())//again here it is a promise
.then((data1)=>foo(data1));
function foo(data1){
    for(var i=0;i<data1.length;i++){
        var div=document.createElement("div");
        div.innerHTML=`Countryname:${data1[i].name.common} Capital:${data1[i].capital[0]}`;
        document.body.append(div);
    }
}