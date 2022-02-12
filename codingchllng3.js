// Test data 1

{
    let avrD = (96+108+89)/3;

    let avrK = (88+91+110)/3;

    console.log(avrD, avrK);

    if (avrD > avrK){

        console.log("Team Dolphis are winners");
    }   

    else if (avrK > avrD){

        console.log("Team Koalas are winners");

    } else if (avrD === avrK){

        console.log("the match is draw");
    }

}

// Bonus - 1

{

    let avrD = (97 + 112 + 101)/3;
    let avrK = (109 + 95 + 123)/3;

    console.log(avrD, avrK);

    if (avrD > avrK && avrD >= 100){

        console.log("Team Dolphins are winners");

    } 
    
    else if ( avrK > avrD && avrK >= 100){

        console.log("Team Koalas are winners");
    }

    else if (avrD === avrK){

        console.log("The match is draw");
    }

}

// Bonus - 3

{

let avrD = (97 + 112 + 101)/3;

let avrK = (109 + 95 + 106)/3;

console.log(avrD, avrK)

if (avrD > avrK && avrD >= 100){

    console.log("Team Dolphins are winners");
} 
else if (avrK > avrD && avrK >= 100){

    console.log("Team Koalas are winners");
}

else if (avrD === avrK && avrD >= 100 && avrK >= 100){

    console.log("The match is draw")
}

else{

    console.log("No one win the trophy");
}

}

// trying out possibilites


{

    let avrD = (97 + 112 + 80)/3;
    
    let avrK = (109 + 95 + 50)/3;
    
    console.log(avrD, avrK)
    
    if (avrD > avrK && avrD >= 100){
    
        console.log("Team Dolphins are winners");
    } 
    else if (avrK > avrD && avrK >= 100){
    
        console.log("Team Koalas are winners");
    }
    
    else if (avrD === avrK && avrD >= 100 && avrK >= 100){
    
        console.log("The match is draw")
    }
    
    else{
    
        console.log("No one win the trophy");
    }
    
    }