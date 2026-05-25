// default function 

function add(v1, v2) {
    console.log(v1, v2)
}
add(); // if we do not pass any argument in the fuction then it will return undefine but if we do pass any argument and try to do operation on thar then it will return NaN (adding 2 undefine gives NaN) 

function add(v1 = 8, v2 = 6) {
    console.log(v1 + v2)
}
add(); // if we do not pass any argument then function will use his default value ; but if we pass argument then funtion use the argument that is define 

//  REST  

// jab arguments kai saare ho to humein utne hi parameter banaane padege, issey bachne ke liye, hum rest(•••  '3 dot') ka use karte hai
// agar(...) function ke param mein lage to wo rest operator hain or agar (...) array ya object mein lage to usse spread operator kehte hai

function abcd(...val) {
    console.log(val); // sara value array mein store hota hai
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function fnc(a, b, c, ...val) {
    console.log(a, b, c, val); //a ,b,c ko value mil jayega orr baki ka aarray ban ayega rest operator ke karan
}
fnc(1, 2, 3, 4, 5, 6, 7, 8, 9);

//    FIRST CLASS FUNCTION 

function abcd(val) {
    val();
}

abcd(function () {
    console.log("ye value pass ho rha hai main function mein");
}) // here function is an argument that is passed in function abcd 

// HIGHER ODER FUNCTION :- Wo function jo ki return kare function ya fir acceept kare ek fnc apne parameter mein

function abcd(val) {
    val();// ye ek higher oder function hai as it accept fnc as parameter 
}

abcd(function () {
    console.log("ye value pass ho rha hai main function mein");
})

function abc() { // abc return function 
    return function () {
        console.log("Inner returned function executed");
    }
}
const returnedFn = abc();
returnedFn()

//   PURE VS IMPURE FUNCTION 
// Aisa function jo ki bahar ki value ko na badle or bahar ki value ke wajah se khud kona badle wo hai pure fnc or jo bahar ka value ko badal de (side effect ho jis)function se wo hua impure fnc 

let a = 12
function abcd() {
    console.log("hehehe");
} // ye hai pue fnc ye just print "hehehe" {pure function}
abcd();

function hui() {
    a++; // ye a ka value ko increment kr dega {impure function } 
    console.log(a);
}
hui();
console.log(a);

// closures -> ek fnc jo return kare ek aur function aurreturn hone waala function humesha youse karega parent fnc ka koi variable

function abcd() {
    let num = 12;
    return function () {
        console.log(num);
    }
}
const closureFn = abcd();
closureFn();

// IIFE Imediately Invoked function expression

// callback