let number = prompt("Enter a random number");

let message = (number > 90 && number < 110) ? "Bingo!" : "Miss" ;

alert(message);
{
let number = prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

}

let firstnumber = Number(prompt("Enter first number"));
let secondnumber = Number(prompt("Enter second number"));
let operand = prompt("Enter oprand (+ , - , / or *)");
let result;

if (!Number.isNaN(firstnumber) && !Number.isNaN(secondnumber)) {
    switch (operand){
        case "+": result = firstnumber + secondnumber; 
        break;
        case "-": result = firstnumber - secondnumber;
        break;
        case "*": result = firstnumber * secondnumber; 
        break;
        case "/": result = firstnumber / secondnumber; 
        break;
        default: result = "Error: unknown operand";
    }
}else {
    result = "Error: at least one of the entered vaules is not a number";
}
alert(result);