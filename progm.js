
// Takes User name and prints full name

const Name = prompt("Enter your first name");
const lname = prompt("enter your last name");

alert("full name is" +full_name)

// user name version 2

const first_name = prompt("Enetr you first name")

const last_name = prompt("Enet your last name")

const full_name = first_name + " " + last_name;

alert("Hi, " +full_name);



// user name using console-log

const first_name = prompt("Enetr you first name")

const last_name = prompt("Enet your last name")

const full_name = first_name + " " + last_name;

console.log("Full name is " +full_name)




// discount price

let raw_price = prompt("enter the price");

let discount_price = raw_price-(raw_price*.206);

alert("the discounted price is " +discount_price);


// discount using conslole-log


let raw_price = prompt("Enter the price");

let discount_price = raw_price-(raw_price*.206);

console.log("Discounted price is " +discount_price)



// Degree celsius to Fahrenhit

let c = prompt("Enter the temperature in celsius");

let f = (c * (9/5)) + 32;

console.log(" Temperature in Fahrenhit is " +f);



// Degree celsius to Fahrenhit using alert


let c = prompt("Enter the temperature in celsius");

let f = (c * (9/5)) + 32;

alert("Temperature in Fahrenhit is " +f);


/*let a = prompt("Enter first number ");

let b = prompt("Enter the second number ");

let temp1 = a;

let temp2 = b;

temp1 = temp2;

a = temp2;

b = temp1;


console.log("a and b are" +a, +b);*/


// swap two numbers version 1

let a = prompt("Enter first number ");

let b = prompt("Enter the second number ");

let temp = a;

a = b;

b = temp;

console.log("a and b are " +a, +b);

// version 2

let number1 = prompt("Enter first number ");

let number2 = prompt("Enter the second number ");

let temp = number1;

number1 = number2;

number2 = temp;

console.log("number 1 and number 2 are " +number1, +number2);

// version 3

let number1 = prompt("Enter first number ");

let number2 = prompt("Enter the second number ");

let temp = number1;

number1 = number2;

number2 = temp;

console.log("number 1 " +number1);

console.log("number 2  " +number2);


// best version 4

let  a = prompt("Enter the value of a ");

let b = prompt("enter the value of b ");

let c = a;

a = b;

b = c ;

console.log("value of a is " +a);

console.log("value of b is " +b);