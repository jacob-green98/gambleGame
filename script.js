function rollDice() {
    let score = 0;
    for (let i = 0; i < 100; i++) {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const combinedRoll = die1 + die2;
    alert('You rolled a ' + combinedRoll);
    
    if (die1 === die2) {
        score = 0;
        alert('You rolled doubles! Game over!');
        break; // Use break to exit the loop
    }

    switch (combinedRoll) {
        case 2:
            score += 2;
            break;
        case 3: 
        score += 3;
        break;
        case 4:
            score += 4;
            break;
        case 5: 
        score += 5;
        break;
        case 6:
            score += 6;
            break;
        case 7: 
        score += 7;
        break;
        case 8:
            score += 8;
            break;
        case 9: 
        score += 9;
        break;
        case 10:
            score += 10;
            break;
        case 11: 
        score += 11;
        break;
        case 12:
            score += 12;
            break;
        default: 
            break;
    }
}
    alert('Your final score is ' + score + ' !')
}


// use return to exit a function