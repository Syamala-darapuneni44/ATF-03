let a1=[1,2,3,4,5];
let a2=[...a1,6,7,8];
console.log(a2);
let n=[1,2,3,4,5];
function sum(a,b,c,d){
    console.log(a+b+c+d)
}
sum(...n)

const person ={
    name:"syam",
    marks:2000
}
const {name,marks} =person
//Destructuring assignment is a JavaScript expression that enables the extraction of values from arrays or properties from objects into separate variables. This syntax can make your code cleaner and more concise