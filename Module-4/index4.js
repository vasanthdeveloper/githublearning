// Functional Based Approaches
// Adding the Events


// var email=document.createElement("label");
// email.setAttribute("for","email");
// email.innerText="Email"; //(or)  email.innerHTML="Email"
// var br1=document.createElement("br");
// var inputemail=document.createElement("input");
// inputemail.setAttribute("type","email");
// inputemail.setAttribute("id","email");

// To AVOID REPETATIVE CODE LIKE ABOVE CODE MEANS THAT TIME WE USE FUNCTION

// create function for label, input type and br
{/* <label for=""></label> */}
function labelCreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
// create function for linebreaker
// <br>
function linebreaker(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
// create function for input
{/* <input type="email"  id=""> */}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
     var ele=document.createElement(tagname);
      ele.setAttribute("attrname","attrvalue");
      ele.setAttribute("attrname1","attrvalue1");
      return ele
}
var email=labelCreate("label","for","email","Email");
var br1=linebreaker("br");
var emailinput=inputele("input","type","email","id","email");
var br2=linebreaker("br");
document.body.append(email,br1,emailinput,br2);