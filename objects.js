// In JavaScript, an object is a collection of key-value pairs where values can be data or functions, and objects are stored and passed by reference. Object ka key number ya boolean bhi ho sakta hai 

// Object = related data + related behavior ko ek saath rakhne ka structure

// let obj = {}; this is a blank object 

let student = {
    name: "Adarsh",
    "full name" : "Adarsh Kumar", // hum isko "." se access nhi kr sakta hai 
    rollNo: 21,
    marks: 85,
    khana: "Dosa , Chola bhatura",
    study: function () {
        console.log("Studying...");
    }
};
console.log(student);

// accessing the value of object 
console.log(student.khana);
console.log(student['marks']);

let aa = "name";
student[aa]; // this will work
student.aa; // but this will not work dot ka mtlb hota hai literrally usi chiz ko dhundana jo dot ke baad likha hua hai 


const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            latitude: 23.2,
            longitude: 77.4,
        },
    },
};

console.log(user.address.location.latitude)// for accessing latitude

 // console.log(user.address.locations.latitude)// give error := Cannot read properties of undefined (reading 'latitude') eroor latitude mein nhi hai latitude ke just pehle wala mein hai "location" mein hai 
// You wrote locations (plural)
// But in object it is location (singular)

let { latitude, longitude } = user.address.location;
console.log(latitude, longitude); // abb jab bhi longitude ya latitude access krna hoga to simply uska keyword se use kr lenge  
// ISS CONCEPT KO KEHTE HAI DESTRUCTURING : MOST IMPORTANT

let obj = {
    name: "harsh",
    age: 20,
    email: "try123@email.in"
};
for (let key in obj) { // key ke jgh any name 
    console.log(key, obj[key]); // obj[key] is use to get the value of key
}

console.log(Object.keys(obj))// give an array of all the key element of an object 
console.log(Object.entries(obj)) // return krega array jisme har element ek array hoga key value pair ka 

let obj2 = { ...obj }
console.log(obj2);  // copy obj in obj2

let role = "admin";
let object = {
    name: "harsh",
    age: 26,
    email: "test@test.com",
    address: {
        city: "bhopal",
    },
    [role]: " Adarsh"
};

let object2 = { ...object };
object2.address.city = "Indore";
object2.age = 19;

console.log(object.address.city);
console.log(object2.address.city); // both will give same answer that is "Indore" bcoz jab bhi hum koi object copyy krte hai direct object to copy by value hota hai pr object ke andar agar koi object hai "yani nested object to wo copy by reference se copy hota hai" iss liye city change krne se dono object ka city change ho gya 

console.log(object.age);
console.log(object2.age); // pr age direct access hota hai to age change nhi hua object mein object2 mein change krne se

toobject.address.city = "Indore";

// console.log(object.address.city);   // "bhopal" (Original stays same)
// console.log(toobject.address.city); // "Indore" (New copy is updated)

let objec2 = JSON.parse(JSON.stringify(object)); // jason.stringify pehle object ko string mein convert kr deta hai fir json .parese wapas se uss string ko json mein convert kr deta hai to pura object hi yahan pr copy hoga real copy mein na ki reference copy THIS PROBLEM IS CALLED DEEP CLOANING
console.log(objec2);

// Access the value of "first-name" from this object:
const users = {
    "first-name": "Harsh",
};
console.log(users["first-name"]);

// optional chaining 
const locations = {
    city: "Bhopal",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

 console.log(locations?.coordinate?.lat); //this will not give error return undefined


 const emp = {
"first-name": "Harsh",
};
let { "first-name": firstName } = emp;


// Use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks
const course = {
title: "JavaScript",
duration: "4 weeks",
};
Object.entries(course).forEach(function (val) {
console.log(val[0] + ": "+ val[1]); 
});



// object 2 trh se declare kr sakte hai object ki trh or consructor ki trh

// object literals

[mySym] = "mykey1" // this is the syntax of declaration of symbol chale declare krna ho ya access krna ho "[]" use hoga hi 

Object.freeze(course); // freeze krne se hum fir usspr koi bhi change nhi kr sakte 


const customer = new Object()
console.log(customer);  // give empty object 

// combining two object
const objj1 = {1: "a", 2: "b"}
const objj2 = {3: "a", 4: "b"}
const objj4 = {3: "a", 4: "b"}

// const objj3 = { objj1, objj2 }
// const objj3 = Object.assign({}, objj1, objj2) // agar {} nhi bhi denge to koi issue nhi hai but dena chahiy ye confirm kr deta hai ki answer object hi ho 
const objj3 = {...objj1, ...obj2} 
console.log(objj3); // there are 3 ways to asign object  

// READ OBJECT ASSIGN DOCUMENTATION  OBJECT DESTRUCTURE AND ARRAY DESTRUCTURE  

// agar hum array ke sare keys ko le to wo array mein store hota hai

console.log(Object.keys (customer));
console.log(Object.values (customer));
console.log(Object.entries (customer));
 
// 🔹 What is a Constructor :- A constructor function is used to create multiple similar objects.

// class Gamer {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }


function Gamer(name, age) {
  this.name = name;
  this.age = age;
}
const u1 = new Gamer("Adarsh", 21);  
const u2 = new Gamer("Rahul", 22); //The new keyword is an operator used to create a new instance of an object from a class or constructor function



// ❌ Constructor + Method (WRONG WAY)

function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("Hi " + this.name);  // Every object gets its own copy of sayHi
  };
}


// ✅ Correct Way (Prototype)

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi " + this.name);   //  ✔ Memory efficient ✔ Interview-ready
};


