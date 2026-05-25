// var let const (avoid to use var)
/*
var username="harsh";

// declaration and initialization

var a; // declaration
var a=12; // declaration and initialization
// variable ko var se banane pr wo window mein add hota hai Or ye hamesa function me scoped hota hai and hum isko firse declare kr sakte hai same name se and error nhi aayega 

var a = 12; 
var a=31;
console.log(a); // so with this sometime our data may lost in a big project so we need to use var 

// let b = 93;
// let b = 43;  not possible in let it will keep your data safe throughout the program



// SCOPE  (GLOBAL-SCOPE , BLOCK-SCOPE , FUNCTIONAL-SCOPE)

// var is functionalscope and cant resoect block but let is block scope 


// REASSIGNMENT , AND REDECLARATION

// // with the help of var we can redeclare the value of variable 
// var a = 10;
// var a = 11; this is redeclaration

// but we can only reassign the value in let 
// let a=34;
//     a=23; this is reassigning


// TEMPORAL DEAD ZONE  :- utna area jitne mein js ko pata to hai ki variabl exist karta hai par wo aapko value nahi de sakta
// aapke variable banane se upar jitna space hai wo uss variable ka tdz hai  ye sirf let or const mein hota hai var mein nhi 


// console.log(x);

// let x = 12;  // Cannot access 'x' before initialization


// Hoisting impact per type   (Hoisting is totally different from Hosting)
// Hoisting -> ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jata hai

var a=12 ;
var a=undefined ;
a=12 ; // ye do line iss tarah se tuta  hua hota hai var a=12 ke liye

// var -> hoist -> undefined
// let -> hoist -> X  (x= value not set gives reference error )
// const -> hoist -> X

// Object.freeze  



//   ****   DATA TYPES   ***
// there re two types of datatypes :- PRIMITIVE and REFERENCE datatype

// primitives –> aisi saari values jinko copy karne par Cumhe ek real copy mil jaaye
// reference -> inko copy karne par real copy nahi milegi but aapko reference milega -pa

// let a = 12; // now a bcome 14 
// let b = a; // but b remane 12
// a = a + 2; 

// null ka matlab hai aapne jaan boojh kar koi value nahi di 
 
// undefined ka matlab ki aapne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined

// OPERATOR 

// Comparision Operator 
// 1. = it means to assign the value in Js
// 2. == ise for checking the values "but dont check its data type "; return booean answer [ 12 = "12" is true]
// 3. === tripple usal strictly check value as well as datatype
// 4.!= not equal  same as == not strict 
// 5.!== strict
// 6. > greater than symbol  ||  >= greater than equal 
// 7. < less than symbol  ||  <=  >= less than equal

// ASSIGNMENT OPERATOR 
// = set the vale 
// += add the value and then set the value 
// -= subtract the value and then set the value
// *= multiply the value and thenset the value
// /= divide the value and thenset the value
// %= modulus the value and thenset the value

// instanceof batata hai ki ye uska part hai ya nhi 




//    +++++   MEMORY MANAGEMENT  +++++

// there are two types of memory stack memory and heap memory
// Stack is use in all "primitive" data type and Heap is used in "non-primitive" data type

// Stack mein hmko copy milata hai . Jabki heap mein reference milta hai variables ka
// Stack is fast & fixed, Heap is flexible & dynamic.


let aa = 10;
let bb = aa;

bb = 20; // bb -> 20 but aa still 10 


//     +++++    STRING   +++++

const name = "hitesh"
const repoCount = 50
console.log(name + repoCount +" Value"); // old style , not recomended in product

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this method is called string interpolation 
// hum log on go hi string ka method use kr sakte hai yahan pr {name.charAt(val)} like this 

const gameName = new String ('hiteshhc')
console.log(gameName [0]);
console.log(gameName. __proto__); // console krne pr empty object milrhar hai pr isme kafi sare prototype hai string ke liye jise hum use kr sakte hai console kro browser mein or dekh lo 

let users = "Deepak-Jha";
const newUser = users.substring(0,4);// 0 to 3 substring m negative dene se wo usko ignore kr ke ststing "0" leleta hai
console.log(newUser);
let user2 = "Harkiraat-Singh";
const newuser2 = user2.slice(-12,9); 
console.log(newuser2);
// A negative start index is calculated as string.length + index

const usr = "    Raju Kaju   ";
console.log(usr);
console.log(usr.trim());  // trim is use to remove un neseccary space

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'));// hai ya nhi string ke andr wo batayega {return boolean}

*/

//     +++++  NUMBER  +++++

const score = 238;
console.log(score);
const balance = new Number (100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.8966
console.log(otherNumber. toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //adding en-In help us to represent into indian standard 


//   +++++  MATHS +++++
