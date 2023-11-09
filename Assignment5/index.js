function myFunction(){
    var table=document.getElementById("myTable");
    var row=document.createElement("tr");
    var cell0=document.createElement("td");
    var cell1=document.createElement("td");
    var cell2=document.createElement("td");
    var cell3=document.createElement("td");
    // var cell4=document.createElement("td");
    var cell5=document.createElement("td");
    var cell6=document.createElement("td");
    var cell7=document.createElement("td");
    var cell8=document.createElement("td");
    var cell9=document.createElement("td");
    cell0.innerHTML="1";
    cell1.innerHTML =document.getElementById("first-name").value;
    cell2.innerHTML =document.getElementById("last-name").value;
    cell3.innerHTML =document.getElementById("address").value;
    // cell4.innerHTML =document.getElementById("address").value;
    cell5.innerHTML =document.getElementById("pincode").value;
    if(cell6.innerHTML=document.getElementById('male').checked) { 
        console.log(cell6.innerHTML)
        cell6.innerHTML 
            = "Male"; 
    } 
    else if(cell6.innerHTML=document.getElementById('female').checked) { 
        cell6.innerHTML="Female";   
    } 
     //cell7.innerHTML =document.getElementById("food").value;
     var item1=document.getElementById("northindian").value;
     var item2=document.getElementById("southindian").value;
     var item3=document.getElementById("chinese").value;
     var item4=document.getElementById("japanese").value;
     var item5=document.getElementById("seafood").value;
     const arr=[]
    if(cell7.innerHTML=document.getElementById('northindian').checked) { 
        cell7.innerHTML  = "North Indian"; 
    } 
    else if(cell7.innerHTML=document.getElementById('southindian').checked) { 
        cell7.innerHTML  ="South Indian";   
    } 
    else if(cell7.innerHTML=document.getElementById('chinese').checked) { 
        cell7.innerHTML= "Chinese";   
    } 
    else if(cell7.innerHTML=document.getElementById('japanese').checked) { 
        cell7.innerHTML= "Japanese";   
    } 
    else if(cell7.innerHTML=document.getElementById('seafood').checked) { 
        cell7.innerHTML= "Sea Food";   
    } 
    cell8.innerHTML =document.getElementById("state").value;
    cell9.innerHTML =document.getElementById("country").value;
    row.appendChild(cell0);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    // row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    row.appendChild(cell8);
    row.appendChild(cell9);
    table.appendChild(row);
    document.getElementById("form").reset();
}