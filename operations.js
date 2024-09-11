let n1 = parseInt(prompt("Enter the first integer:"));
let n2 = parseInt(prompt("Enter the second integer:"));
let operation = prompt("Enter the operation");

switch (operation) {
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert(n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
    case '%':
        alert(n1 % n2);
        break;
    case '/':
        if (n2 !== 0) {
            alert(n1 / n2);
        } else {
            alert("Division by zero is not allowed.");
        }
        break;
    default:
        alert("Invalid operation. Please enter one of +, -, *, %, or /.");
}
