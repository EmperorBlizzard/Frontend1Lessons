const cards = new Map();

cards.set("images/2_of_clubs.svg", 2)
cards.set("images/3_of_clubs.svg", 3)
cards.set("images/4_of_clubs.svg", 4)
cards.set("images/5_of_clubs.svg", 5)
cards.set("images/6_of_clubs.svg", 6)
cards.set("images/7_of_clubs.svg", 7)
cards.set("images/8_of_clubs.svg", 8)
cards.set("images/9_of_clubs.svg", 9)
cards.set("images/10_of_clubs.svg", 10)
cards.set("images/jack_of_clubs.svg", 10)
cards.set("images/queen_of_clubs.svg", 10)
cards.set("images/king_of_clubs.svg", 10)
cards.set("images/ace_of_clubs.svg", 11)

cards.set("images/2_of_diamonds.svg", 2)
cards.set("images/3_of_diamonds.svg", 3)
cards.set("images/4_of_diamonds.svg", 4)
cards.set("images/5_of_diamonds.svg", 5)
cards.set("images/6_of_diamonds.svg", 6)
cards.set("images/7_of_diamonds.svg", 7)
cards.set("images/8_of_diamonds.svg", 8)
cards.set("images/9_of_diamonds.svg", 9)
cards.set("images/10_of_diamonds.svg", 10)
cards.set("images/jack_of_diamonds.svg", 10)
cards.set("images/queen_of_diamonds.svg", 10)
cards.set("images/king_of_diamonds.svg", 10)
cards.set("images/ace_of_diamonds.svg", 11)

cards.set("images/2_of_hearts.svg", 2)
cards.set("images/3_of_hearts.svg", 3)
cards.set("images/4_of_hearts.svg", 4)
cards.set("images/5_of_hearts.svg", 5)
cards.set("images/6_of_hearts.svg", 6)
cards.set("images/7_of_hearts.svg", 7)
cards.set("images/8_of_hearts.svg", 8)
cards.set("images/9_of_hearts.svg", 9)
cards.set("images/10_of_hearts.svg", 10)
cards.set("images/jack_of_hearts.svg", 10)
cards.set("images/queen_of_hearts.svg",10)
cards.set("images/king_of_hearts.svg", 10)
cards.set("images/ace_of_hearts.svg", 11)

cards.set("images/2_of_spades.svg", 2)
cards.set("images/3_of_spades.svg", 3)
cards.set("images/4_of_spades.svg", 4)
cards.set("images/5_of_spades.svg", 5)
cards.set("images/6_of_spades.svg", 6)
cards.set("images/7_of_spades.svg", 7)
cards.set("images/8_of_spades.svg", 8)
cards.set("images/9_of_spades.svg", 9)
cards.set("images/10_of_spades.svg", 10)
cards.set("images/jack_of_spades.svg", 10)
cards.set("images/queen_of_spades.svg", 10)
cards.set("images/king_of_spades.svg", 10)
cards.set("images/ace_of_spades.svg", 11)

// Math.floor(Math.random() * 52)

const cardsArray = Array.from(cards)

// console.log(cardsArray);

console.log()


const card = document.createElement("img")

const drawCard = cardsArray[Math.floor(Math.random() * 52)]

card.src = drawCard[0]

document.body.appendChild(card)

const card2 = document.createElement("img")

const drawCard2 = cardsArray[Math.floor(Math.random() * 52)]

card2.src = drawCard2[0]

document.body.appendChild(card2)