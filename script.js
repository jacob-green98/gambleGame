function rollDice(){
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const combinedRoll = die1 + die2;
    alert('You rolled a ' + combinedRoll);
}