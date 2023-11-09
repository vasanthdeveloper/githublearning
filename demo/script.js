//XML-HTTP request: they are used to interact with the servers via API
//4 steps:
//step:1 :- creating a XHR object(XML-HTTP request)......
//server gives the response as a object
var request=new XMLHttpRequest();
//step:2 :- Opening a request
//it consist 2 parameter
//1-parameter: HTTP method called: GET
//2-parameter: API 
request.open("GET","https://restcountries.com/v3.1/all");
//step:3 :- Sending the request
// I'm kickstarting the request
request.send();
//step:4 :- Once the data successfully loaded from the server
//status code: 200
//use onload event
//function helps to perform some specific task
//data coming from the server is of type JSON string
//so to convert the data from string to object
//we need JSON.parse()
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
}
