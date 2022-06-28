// 01

// const sortLetters = (string) => {
//     let stringArray = ""
//     let result = ""

//     stringArray = string.split("")
//     stringArray.sort()
//     result = stringArray.join("")
//     return result

// }

// const essaie = sortLetters("konexio")
// console.log(essaie)

// --------------------------------------------------------------------------------------------------------

// 02
// const countEach = (string) => {
//     let numberX = 0
//     let numberO = 0

//     for(let i = 0; i < string.length; i++){
//         if(string[i] === "x"){
//             numberX += 1
//         }else{
//             numberO += 1
//         }
//     }

//     if(numberX === numberO){
//         return true
//     }else{
//         return false
//     }
// }

// let test = countEach("xooxo")

// console.log(test)

// --------------------------------------------------------------------------------------------------------

// 03
// const isPalindrome = (string) => {
//     let stringArray = string.split("")
//     stringArray = stringArray.reverse()
//     let wordReverse = stringArray.join('')

//     if(string === wordReverse){
//         return "Palindrome"
//     }else{
//         return "Nope"
//     }
// }

// const test = isPalindrome("racecar")
// console.log(test)

// --------------------------------------------------------------------------------------------------------

// 04
// const swap = (string) => {
//     let result = ""
//     for(let i = 0; i < string.length; i++){
//         if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
//             result += string[i].toLowerCase()
//         }else{
//             result += string[i].toUpperCase()
//         }
//     }
//     return result 
// }
// const test = swap("Hello World")
// console.log(test)

// --------------------------------------------------------------------------------------------------------

// 05
// const makeItSpongeBob = (string) => {
//     let result = ""

//     for(let i = 0; i < string.length; i++){
//         if(i % 2 === 0){
//             result += string[i].toUpperCase()
//         }else{
//             result += string[i].toLowerCase()
//         }
//     }
//     return result
// }

// let test = makeItSpongeBob("Javascript")

// console.log(test)

// --------------------------------------------------------------------------

// 06
// const sortLetters = (string) => {
//     let lowerCaseString = ""
//     let stringArray = ""
//     let result = ""

//     for(let i = 0; i < string.length; i++){
//         lowerCaseString += string[i].toLowerCase()
//     }

//     stringArray = lowerCaseString.split("")
//     stringArray.sort()
//     result = stringArray.join("")
//     return result

// }

// const essaie = sortLetters("Konexio")
// console.log(essaie)

// ------------------------------------------------------------------

// 07
const countEach = (string) => {
    let numberX = 0
    let numberO = 0

    for(let i = 0; i < string.length; i++){
        if(string[i] === "x" || string[i] === "X"){
            numberX += 1
        }else if(string[i] === "o" || string[i] === "O"){
            numberO += 1
        }
    }

    if(numberX === 0 &&  numberO === 0){
        console.log("Votre mot ne contient ni 'X' ni 'O'")
    }else if(numberX === numberO){
        return true
    }else{
        return false
    }
}

let test = countEach("mmmommm")

console.log(test)

