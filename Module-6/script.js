// let obj1={name:"sanjay",age: 25,bio:{height: 25, weight:45}};
// let obj2={age:25,name:"sanjay",bio:{weight:45,height:25}};
// let flag=true;
// for(let key in obj1){
//     if(obj1[key]!==obj2[key]){
//          flag=false;
//          break;
//     }
// }
// console.log(flag);

const { isEqual } = require("lodash");//import statement

let obj1={name:"sanjay",age: 25,bio:{height: 25, weight:45}};
let obj2={age:25,name:"sanjay",bio:{weight:45,height:25}};
console.log(isEqual(obj1,obj2));