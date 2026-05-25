// // VARIABLE :- Think of a variable as a box with a name on it. You can put something inside it (a value), and later check or change what's inside.

// let age =10;
// console.log(age);
// age = 20;
// console.log(age);
// console.log("current age is "+ age);
// // // let is modern and new and scope blocked :- Scoped to blocks ( {} ) ; Can be reassigned but not redeclared ; Hoisted, but stays in the Temporal Dead Zone (TDZ) 
// // let a = 10;
// // let a = 20; // this is redeclare not reassign 
// // a=40; this is reassign 

// // Reassigning is the act of changing the value of a variable that already exists. You do this by using the assignment operator (=) without using keywords like let or var again.
// // Supported by: let and var.
// // Redeclaring is the act of declaring the same variable name again using a declaration keyword (var, let, or const) within the same scope. 
// // Supported by: Only var.

// // var qw =90;
// // let qw =90;
// // let s=s;



// const box = 22;
// console.log(box + "no of box ");
// // Scoped to blocks Cannot be reassigned or redeclared ; Value must be assigned at declaration ; TDZ applies here too
// // 👉 But: If const holds an object/array, you can still change its contents:

// const student = { name: "Riya" };
// student.name = "Priya"; // ✅ OK
// student = {}; // ❌ Error

// let x = 123e5;    // 12300000  e5 means 5 times 0
// let y = 123e-5;   // 0.00123   e-5 means e se 5 peeche decimal agar koi number nhi hai to zero add kro
// // JavaScript Numbers are Always 64-bit Floating Point
// // in Javascript precision of number is upto 15 places 
// let x1 = 999999999999999;   // x will be 999999999999999
// let y2 = 9999999999999999;  // y will be 10000000000000000 


// var pen = 345;
// console.log(pen + " no of pen ");
// pen = 21;
// console.log(pen + " new no of pen ");

// var pen = 67;
// console.log(pen + "latest no of pen ");


// var is not  consider to use any more bcoz it has not any problem with anything we can redeclare the var with same nae it will not give error. This might create confusion and make code looks and function bad 

// in place of var use let   Can be redeclared and reassigned


// Datatype Conversion 

let score = "33asfdgf";
console.log(typeof score); //  gives string

// now converting this string to number 
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber); //  gives number
console.log(scoreInNumber) // NaN 

// "33" => 33
// "33ab" => NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn);
// empty string is false and some string is true 
// 1 => true; 0 => false
//"" => false
// "hitesh" => true


// // default function 

// function add(v1, v2) {
//     console.log(v1, v2)
// }
// add(); // if we do not pass any argument in the fuction then it will return undefine but if we do pass any argument and try to do operation on thar then it will return NaN (adding 2 undefine gives NaN) 

// function add(v1 = 8, v2 = 6) {
//     console.log(v1 + v2)
// }
// add(); // if we do not pass any argument then function will use his default value ; but if we pass argument then funtion use the argument that is define 

// //  REST  

// // jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest(•••  '3 dot') ka use karte hai
// // agar(...) function ke param mein lage to wo rest operator hain or agar (...) array ya object mein lage to usse spread operator kehte hai

// function abcd(...val) {
//     console.log(val); // sara value array mein store hota hai
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// function fnc(a, b, c, ...val) {
//     console.log(a, b, c, val); //a ,b,c ko value mil jayega orr baki ka aarray ban ayega rest operator ke karan
// }
// fnc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// //    FIRST CLASS FUNCTION 

// function abcd(val) {
//     val();
// }

// abcd(function () {
//     console.log("ye value pass ho rha hai main function mein");
// }) // here function is an argument that is passed in function abcd 

// // HIGHER ODER FUNCTION :- Wo function jo ki return kare function ya fir acceept kare ek fnc apne parameter mein

// function abcd(val) {
//     val();// ye ek higher oder function hai as it accept fnc as parameter 
// }

// abcd(function () {
//     console.log("ye value pass ho rha hai main function mein");
// })


// function abc() { // abc return function 
//     return function () {

//     }
// }
// abc()


// //   PURE VS IMPURE FUNCTION 
// // Aisa function jo ki bahar ki value ko na badle or bahar ki value ke wajah se khud kona badle wo hai pure fnc or jo bahar ka value ko badal de (side effect ho jis)function se wo hua impure fnc 

// let a = 12
// function abcd() {
//     console.log("hehehe");
// } // ye hai pue fnc ye just print "hehehe" {pure function}

// function hui() {
//     a++; // ye a ka value ko increment kr dega {impure function } 
// }

// // closures -> ek fnc jo return kare ek aur function aurreturn hone waala function humesha youse karega parent fnc ka koi variable

// function abcd() {
//     let num = 12;
//     return function () {
//         console.log(num);
//     }
// }