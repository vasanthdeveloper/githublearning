// var email=document.createElement("label");
// email.setAttribute("for","email");
// email.innerHTML="Email";
// var br=document.createElement("br");
// var emailInput=document.createElement("input");
// emailInput.setAttribute("type","email");
// emailInput.setAttribute("id","email");
// document.body.append(email,br,emailInput);
function createElement(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function lineBreaker(tagname){
    var br=document.createElement(tagname);
    return br;
}
function createInput(tagname,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
}
var createElement1=createElement("label","for","firstname","FirstName");
var br1=lineBreaker("br");
var createInput1=createInput("input","type","text","id","firstname");
var br2=lineBreaker("br");
document.body.append(createElement1,br1,createInput1,br2);
var createElement2=createElement("label","for","middlename","MiddleName");
var br3=lineBreaker("br");
var createInput2=createInput("input","type","text","id","middlename");
var br4=lineBreaker("br");
document.body.append(createElement2,br3,createInput2,br4);
var createElement3=createElement("label","for","lastname","LastName");
var br5=lineBreaker("br");
var createInput3=createInput("input","type","text","id","lastname");
var br6=lineBreaker("br");
document.body.append(createElement3,br5,createInput3,br6);
var createElement4=createElement("label","for","email","Email");
var br7=lineBreaker("br");
var createInput4=createInput("input","type","email","id","email");
var br8=lineBreaker("br");
document.body.append(createElement4,br7,createInput4,br8);
