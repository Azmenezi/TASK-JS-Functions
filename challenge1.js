/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
let myName = "Aziz"

function printName(){
    console.log(`My name is ${myName}`)
}

printName()
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear){
let age = 2023 - birthYear
console.log(`I am ${age} years old`)
}

printAge(2001)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(my_Name, language){
if(language == "en"){
    console.log(`Hello ${my_Name}`)
}else if(language == "es"){
    console.log(`Hola ${my_Name}`)
}else if(language == "fr"){
    console.log(`Bonjour ${my_Name}`)
}else if(language == "tr"){
    console.log(`Marhaba ${my_Name}`)
}else {
    console.log(`Hello ${my_Name}`)
}

}

printHello("Azizan", "es")
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(n1, n2){
    if(n1 > n2){
        console.log(n1)
    }else if(n2 > n1){
        console.log(n2)
    }
}

printMax(2, 6)

printMax(8, 6)