//objects->collection of keys               -- key &values are called properties
//let s={
//name:"syam",
//mark:20
//}
//s.mark=40
//s["name"]="john"
//console.log(s)
//console.log(object.entries(s));
//let colors=["red","blue"];



//function greet (params){
  //  console.log("funtion greet");
//}
//function sum(a,b){
  //  return a+b;//where ever we used return then the program gets terminated

//}
//greet();
//let result = sum(2,4);
//console.log(result);
//console.log (sum(2,5));
//let input = prompt("enter number");
//input = parseInt(input)//used to convert any data type into integer
//alert(typeof input);
//reassigning and redeclaration
//map is 


let n1 = parseInt(prompt("Enter the first integer:"));
let n2 = parseInt(prompt("Enter the second integer:"));
let operation = prompt("Enter the operation");

switch (operation) {
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert (n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
        case '%':
    alert(n1 % n2);
    break;
    case '/':
        if (num2 !== 0) {
            alert(n1 / n2);
        }
    }
    else {
        alert("Division by zero is not allowed.");
    }
    break;
default:
    alert("Invalid operation. Please enter one of +, -, *, or /.");
}
