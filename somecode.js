// Adding two strings


let word1= "Ranjan";

let word2 = "KN";

let word3 = word1 + " " + word2;

console.log("word 3 is " +word3)

// using assignment operators

let sent1 = "Nice car ";

sent1 += "is in the city";

console.log("Neha said: " +sent1)

console.log(5 | 2);

// subtraction

var a, b, c;

a = 23;

b = 15;

c = a - b;

console.log(" value of c is " +c);

// MAth.pow function

let r = 5;

let s = Math.pow(r, 3);

console.log("s is " +s);


// Arrays

const cars = ["Maruthi", "Hyundai", "Honda", "Tata"];

console.log(cars [0]);

// Objects

const vehicle = { 
    
    Brand: "Porshe",
    model: " Carrera 911 turbo",
    Engine_displacement: "3200cc",
    Number_of_cylinders: " 4 cylinder "
};

console.log(vehicle.Brand + vehicle.model + " has a " + vehicle.Engine_displacement + vehicle.Number_of_cylinders + " turbo charge Engine");

// using function and return

function Myfunction (f1, f2){

    return (f1+f2);
}

console.log(Myfunction(2, 8));

function greet(){

    console.log("hey Folks");

}

greet();

