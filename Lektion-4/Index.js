// console.log("HELLO WORLD")
//
//
// var camelCase = "camel case" Vanligast
// var  PascalCase = "pascal case"'
//
//
// var varibleName = "" Används inte
//
// let letVaribleName = ""
// const constVaribleNumber = 2
// const boolValue = false
// const nullValue = null
// const undefinedValue = undefined

// const personInformation = {
//     id:1,
//     name: 'Emil',
//     lastName: 'Olsson',
//     age: 22
// }
//
// console.log(personInformation.name +" "+ personInformation.lastName)

// const arrayValue = ["päron", 1, true, {id: 1234}, null, undefined ]
//
// console.log(arrayValue)
//
// arrayValue.push("HejHej")
// arrayValue.splice(0, 1 )
//
// console.log()
//
//
//
// arrayValue.forEach((element) => console.log(element) )


// const cheatCodes = new Map()
//
// cheatCodes.set('infinite gold', 1156456554646454546652)
// cheatCodes.set('god mode', 1177)
// cheatCodes.set('tank', 1990)
//
// console.log(cheatCodes.has('god mode'))
// console.log(cheatCodes.get('tank'))
// console.log(cheatCodes.keys())

// const arr = [1, 1, 16, 23, 19, 1209387]
//
// const setVariable = new Set
//
// setVariable.add(1)
// setVariable.add(1)
// setVariable.add(16)
// setVariable.add(23)
// setVariable.add(19)
// setVariable.add(1209387)
// setVariable.add("emil")
// setVariable.add("emil")
// setVariable.add("Emil")
//
// console.log(setVariable)


const button = document.querySelector(".btn")

button.addEventListener("click", function (event){
    document.getElementById("demo").innerHTML = Math.floor(Math.random()*6)+1;
})

// button.addEventListener("mouseover", function (event){
//     console.log("HEJ")
// });
//2q1
// button.addEventListener("mouseout", function (event){
//     console.log("HEj DÅ")
// });

window.addEventListener("resize", function (event){
    document.getElementById("demo").innerHTML = Math.floor(Math.random()*6)+1;
});

console.log(button);