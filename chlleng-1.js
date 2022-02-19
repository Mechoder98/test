let calcAverage = (score1, score2, score3) => {

    let avgScore = (score1+score2+score3)/3;

    return avgScore;
}

let avgDolphin = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

let avgDolphin2 = calcAverage(85, 54, 41);
let avgKoalas2 = calcAverage(23, 34, 27);

console.log(`average score of Dolphins ${avgDolphin} and average score of Koalas ${avgKoalas}`);

console.log(`average score of Dolphins ${avgDolphin2} and average score of Koalas ${avgKoalas2}`);


function checkWinner(avgDolphin, avgKoalas){

    if(avgDolphin >= 2*avgKoalas){


        console.log(`Team Dolphin Wins (${avgDolphin} vs ${avgKoalas})`);

    } 
    
    else if (avgKoalas >= 2*avgDolphin){

        console.log(`Team Koalas win(${avgKoalas} vs ${avgDolphin})`);
    }

    else{
        console.log("No team wins");
    }

    return (avgDolphin, avgKoalas);
}

let matchWinner = checkWinner(avgDolphin, avgKoalas);

console.log(matchWinner);

let matchWinner2 = checkWinner(avgDolphin2, avgKoalas2);

console.log(matchWinner2);






