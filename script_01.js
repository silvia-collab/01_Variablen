/***** Variablen 01 *******/

/*
let firstName;  // Deklaration (Definition)
firstName = "Max"; // Wertzuweisung
let familyName = "Mütze";  // D. + W.

// Ausgabe
console.log("Hallo " + firstName + " " + familyName +"!");
*/

/*
let firstName = prompt("Bitte Vornamen eingeben!"); 
let familyName = prompt("Bitte Nachnamen eingeben!");  

// Ausgabe
console.log("Hallo " + firstName + " " + familyName +"!");
*/

/*
// JS ist eine untypisierte Sprache! | untyped
let test;
test = "hi";
test = 2;
test = true;

console.log(typeof test);
console.log(test);
*/

/***** Variablen 02 *******/


/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark, now;

// Wertzuweisung | Assignment
let date = new Date();
now = date.getFullYear();

ageJohn = 25;
ageMark = 30;

// Operation
birthYearJohn = now - ageJohn;
birthYearMark = now - ageMark;

// Ausgabe
console.log(now);
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);
console.log("--------------------");

*/

/***** Variablen 03 *******/

/* 
// Deklaration
let ageJohn, ageMark;

// Wertzuweisung
ageJohn = 38;
ageMark = 30;

// Operation (Statement/Test)
let isJohnOlder = (ageJohn > ageMark);  // 28 > 30

// isURLvalid() | isServerUp()

// Ausgabe
console.log("Ist John älter? : " + isJohnOlder);

 */

 /***** Variablen 04 *******/

 let nix;
 let ageJohn = 28;
 let ageMark = 30;
 let name = "John";
 let isJohnOlder = (ageJohn > ageMark);

 console.log("nix: " + typeof nix);
 console.log("ageJohn: " + typeof ageJohn);
 console.log("name: " + typeof name);
 console.log("isJohnOlder: " + typeof isJohnOlder);
 
