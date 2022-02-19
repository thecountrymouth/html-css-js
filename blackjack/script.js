let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let hasBlackJack = false;
let isAlive = false;
let player = {
    text: "Your Chips:",
    chips: 200
}

playerEl.textContent = player.text + " $" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10){
        return 10;
    } else if (randomCard === 1){
        return 11;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    gameDisplay();
}

function gameDisplay() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a new card?";
    } else if( sum === 21){
        message = "You got BlackJack";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        gameDisplay();
    }
}