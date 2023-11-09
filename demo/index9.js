function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function linebreaker(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
     var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.setAttribute(attrname1,attrvalue1);
     return ele;
}
var firstname=labelcreate("label","for","firstname","FirstName");
var br1=linebreaker("br");
var br5=linebreaker("br")
var inputfirstname=inputele("input","type","firstname","id","FirstName");
document.body.append(firstname,br1,inputfirstname,br5);
var middlename=labelcreate("label","for","middlename","MiddleName");
var br2=linebreaker("br");
var br6=linebreaker("br")
var inputmiddlename=inputele("input","type","middlename","id","MiddleName");
document.body.append(middlename,br2,inputmiddlename,br6);
var lastname=labelcreate("label","for","lastname","LastName");
var br3=linebreaker("br");
var br7=linebreaker("br")
var inputlastname=inputele("input","type","lastname","id","LastName");
document.body.append(lastname,br3,inputlastname,br7);
var email=labelcreate("label","for","email","Email");
var br4=linebreaker("br");
var br8=linebreaker("br")
var inputemail=inputele("input","type","email","id","Email");
document.body.append(email,br4,inputemail,br8);
var password=labelcreate("label","for","password","Password");
var br5=linebreaker("br");
var br9=linebreaker("br")
var inputpassword=inputele("input","type","password","id","Password");
document.body.append(password,br5,inputpassword,br9);
