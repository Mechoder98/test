// array and tips


let bill = Number(prompt("Enter the amount of bill"));


function calcTip(bill){

    if(bill > 50 && bill < 300){

        let tip = bill*0.15;

        console.log(`The amount of tip is ${tip} and tip is 15% of bill`);

        return tip;
    }

    else{

        let tip = bill*0.2;

        console.log(`the amount of tip is ${tip} and tip is 20% of bill`);

        return tip;
    
    }


}

let tipAmount = calcTip(bill);

console.log(tipAmount);

let bills = [125, 555, 44];

let tips = [calcTip(125), calcTip(555), calcTip(44)];

console.log(tips);

let total = [(125+calcTip(125)), (555+calcTip(555)), (44+calcTip(44))]

console.log(total);