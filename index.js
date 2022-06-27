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

// 02
const countEach = (string) => {
    let numberX = 0
    let numberO = 0

    for(let i = 0; i < string.length; i++){
        if(string[i] === "x"){
            numberX += 1
        }else{
            numberO += 1
        }
    }

    if(numberX === numberO){
        return true
    }else{
        return false
    }
}

let test = countEach("xooxo")

console.log(test)