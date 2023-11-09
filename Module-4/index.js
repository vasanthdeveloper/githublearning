// //1. use a method called create Element
// var div=document.createElement("div");
// //  variable name(userdefined)
// // here in above statements the elements are in double quotes
// // 2.adding the content inside the html tag
// // innerHTML is a property to add the contents for the above method
// div.innerHTML="this is div";
// // 3. add the created elements dynamically for the webpage
// document.body.append(div);
for(var i=0;i<20;i++){
    var div=document.createElement("div");
    div.innerHTML="This is div";
    document.body.append(div);
}