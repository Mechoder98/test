/*{
    const day = prompt("Enter a day (Eg. sunday, tuesday etc..)");

switch(day){

    case "monday":
        console.log("Little hard to concentrate, monday bluesss!. \n\
        plan the study for week");

      //  break ;

    case "tuesday":
    case "wednsday":
        console.log("Study with an aim to crack Google interview (Instens)");
        break;
    case "thursday":
        console.log("Nothing special, study or work hard...");
        break;

    case "friday":
        console.log("Weekends are near, but concentrate..");
        break;

    case "saturday":
        console.log("revison of the full week");
        break;

    case "sunday":
        console.log("study till 1pm, then relax");
    break;
    default:
       console.log("not a valid input");
 }
}*/

// same above code using else if condition


// const day = prompt("enter a day");

// if(day === "monday"){

//     console.log("Little hard to concentrate, monday bluesss!. \n\
//         plan the study for week");
    
// } else if(day === "tuesday" || day === "wednesaday"){

//     console.log("Study with an aim to crack Google interview (Instens)");
// } else if ( day === "thurday"){

//     console.log("Enjoyyyyy");

// } else{

//     console.log("chillax Homie");
// }


// simple calculator using swicth

let a = Number(prompt("Enter any number"));

let b = Number(prompt("Enter another number"));

let c = a + b;

let d = a-b;

let e = a*b;

let f =a/b;

let opr = prompt("ENter the operation to be performed");

switch(a, b, c, d, e, f, opr){

    case "addition":
       
        console.log (` the value of ${a} + ${b} is ${c}`);
        break;

    case "subtraction":
        console.log(`${a} - ${b} is ${d}`);
        break;

    case "multi": 
    console.log(`${a} * ${b} is ${e}`);
    break;

    case "division":
        console.log(`${a} / ${b} is ${f}`);
        break;

    default:
        console.log("not a valid input");
}