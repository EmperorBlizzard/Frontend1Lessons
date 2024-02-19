// const number = 23478;
// const string = 'hallo';
// const bool = true //false;
// const undefindValue = undefined;
// const nullvalue = null;

// const arrValue = [];
// const mapVAlue = new Map();
// const objValue = {};
// const setValue = new Set();

// const symbolValue = Symbol();


// console.log(typeof symbolValue);

// const immutable = true // går inte att ändra
// let mutable = true // går att ändra


// const titleElements = document.querySelectorAll('.title');
// const title = document.querySelector('.title');

// title.style.backgroundColor = 'blue'

// let size = 10;


// title.addEventListener("click", function(){
//     // title.className = 'pressed'
//     title.style.fontSize = size + 'em'

//     size = size + 5;
// })

const button = document.querySelector(".btn");
const input = document.querySelector(".name-field")
const box1 = document.querySelector(".box-1")
const box2 = document.querySelector(".box-2")

button.addEventListener("click", function(){
    
    console.log(input.value);

    const paragraph = document.createElement("p");
    const paragraph2 = document.createElement("p");

    paragraph.innerHTML = input.value
    paragraph2.innerHTML = input.value
    
    box1.appendChild(paragraph)
    box2.appendChild(paragraph2)

    input.innerHTML = ""
})