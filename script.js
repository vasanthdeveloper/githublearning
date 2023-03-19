var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    var result=res.filter(((ele)=>ele.region=="Europe"));
    var name=result.map((ele)=>ele.population);
    var sum=name.reduce((acc,cv)=>acc+cv,0);
    console.log(`the sum of the population of the europe is ${sum}`);
}
