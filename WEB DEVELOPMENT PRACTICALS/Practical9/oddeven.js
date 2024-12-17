
let number = prompt("Enter a number to check if it's odd or even:");

number = parseInt(number);

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
  
    if (number % 2 === 0) {
        console.log(`${number} is an Even number.`);
    } else {
        console.log(`${number} is an Odd number.`);
    }
}
