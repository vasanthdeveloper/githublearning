var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
var tr1=document.createElement("tr");

var th1=document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="First";
var th2=document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="Last";
var th3=document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="Handle";

tr1.append(th1,th2,th3);
thead.append(tr1);

var tbody=document.createElement("tbody");
var tr2=document.createElement("tr");

var td1=document.createElement("td");
td1.innerHTML="Mark";
var td2=document.createElement("td");
td2.innerHTML="Otto";
var td3=document.createElement("td");
td3.innerHTML="@mdo";

tr2.append(td1,td2,td3);
tbody.append(tr2);
table.append(thead,tbody);
document.body.append(table);



