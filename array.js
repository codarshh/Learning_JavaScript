let arr = [1,8,13,34,5];
console.log(arr[2]);
console.log(arr[20]); // jo index available nhi hota wahn pr "undefine" deta hai 

// modify array;

arr[2]=11;
console.log(arr[2]);

// Array method 

arr.push(28);
arr.push(24);

console.log(arr); // push is use to add the variable at the last of the array

arr.pop();
console.log(arr); // pop remove the element from end 

arr.shift();
console.log(arr); // shift remove the element from starting 

arr.unshift(47);
console.log(arr); // add element from starting 

arr.splice(2,1) // 2 means kahan se value hatana hai 2 is 2nd index and 1 means kitna value hatana hai ; Splice humara actual array ko change kr deta hai wahi slice actual array ka copy banata hai orr usme operation perform krta hai 
console.log(arr);

let newarr = arr.slice(0,3)
console.log(newarr); // slice return krta hai ek naya array jisme "0 kahan se hatana hai" / "3 kahan tak hatana hai [3 is total no. of element jo hatega basically 0,3 means 0,1,2 ]"  {but humara main array change nhi hoga }

let arr2 = [1,2,3,4,5];
console.log(arr2.reverse()); // isme main array hi change ho jayega copy nhi banta hai reverse method 

let arr3 = [21,12,43,10,6 ,33]
console.log(arr3.sort());// output :- [ 10, 12, 21, 33, 43, 6 ]   
// By default, the .sort() method converts all elements into strings and compares their UTF-16 code unit values (alphabetical order), not numerical value.
// When comparing strings character-by-character:
        // "10" starts with "1"
        // "12" starts with "1"
        // "21" starts with "2"
        // "33" starts with "3"
        // "43" starts with "4"
        // "6" starts with "6" 
// Because the character "6" comes after "1", "2", "3", and "4" in the dictionary, JavaScript places 6 at the very end. It treats your numbers exactly like it would treat words: 10 comes before 6 for the same reason "Apple" comes before "Zebra". 

  
//  SORTING ;

let arr4 = [11, 62, 3, 4, 25];
let sorting = arr4.sort(function (a, b) {
return a - b; // a-b ascending order mein function asscending order m arrange krta hai;  {b-a krne se descending order m arrange ho jayega }
});
//  sort ek function accept krta hai 

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. similar for reverse()  and  toReversed()



//  FOR EACH 

let brr = [11, 62, 3, 4, 25];
brr.forEach(function (val) {
console.log(val + 5) ;
});


//   MAP :- map sirf tab use krna hai jab aapko ek naya array banana hai pichle array ke data ke basis pr. Map dikhte sath hi map m blank array bana liya karo 

let newbrr = brr.map(function(val){
    return 12+val; // return necessary hai agr return nhi krenge to undefine return krega  
})
console.log(newbrr);

let newbrr2 = brr.map(function(val){
   if(val>10) return 12+val; // return necessary hai agr return nhi krenge to undefine return krega  
})
console.log(newbrr2);

// map kab use krna hai :- jab bhi koi aisa case ho jisme ek array se naya array banana hai or naya array kooch return krta  hai to map use krna sahi rhega 


let crr = [1, 2, 3, 4, 5, 6, 7, 8];
let newcrr = crr.filter(function (val) {
 if (val > 4) return true; // return koi value nhi true ya false krenge
});
console.log(newcrr); // true likne se array ka element new array m jayega false likhne se nhi jayega 


// REDUCE :- jab humare pass ek array hai or hume sari calculation krne ke baad last mein ek "single" value banana ho to reduce use hoga 

let arry = [11,22,33,11,44,55]; 
let ans = arry.reduce(function (accumulator, val) {
return accumulator + val;
}, 0); // here is the initial value of accumulator
console.log(ans);
// Accumulator wo variable hai jo har iteration ka result yaad rakhta hai. "hum log accumulator ke jagah pr koi bhi nam rakh sakte hai " accumulator wo hai jo reduce() ke andar final result ko step-by-step collect karta hai. just like count
// function return hokr accumulator ke pass jayega 

let value = arry.find(function (val) {
return val === 11;
});
console.log(value);

let valu = arry.findIndex(function (val) {
return val === 11;
});
console.log(valu);

//find() hamesha LEFT se RIGHT check karta hai aur jo pehle element condition satisfy kare, wahi turant return kar deta hai.
// ALWAYS use === 
// == sirf tab jab tumhe type conversion intentionally chahiye

let any = arry.some (function (vall) {
return vall > 35;
});
console.log(any); // return boolean 
// agar ek bhi condition true hua to true dega nhi to false 

let all = arry.every(function(val){
    return val > 15;
})
console.log(all); // similar to some but all value must satisfy the condition ek bhi fail hua to answer false return hoga 

//    DESTRUCTURING 

let arrs = [1, 2, 3, 4, 5];
let [a, b,, c] = arrs; // ,, ke 3 ka value nhi aaya a array ka first element liya b 2nd element ,, se 3rd element nhi aaya c 4th value liya  
console.log(a, b, c)

//  SPREAD OPERATOR
 
let arrs2 = [...arrs]
console.log(arrs2); // agar hum arrs2 mein koi bhi chane krenge to arrs mein change nhi hoga 

// QUESTIONS

// Insert "Red" and "Blue" at index 1 in this array:
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");// kooch remove nhi krega but 1 ke baad red and blue add kr dega 

// go through 7:14:00 


// MAP 

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // India Ek hi bar print hoga map mein unique value hi aata hai 
console.log(map);

for (const val of map) {
    console.log(val);
} // iss trh se hmko array milega jisme key and value dono hoga 

for (const [key,value] of map) {
    console.log(key, ' : ', value);
} // iss trh se hmko just element milega 

// const myObject={  // or...of loop objects ke liye nahi hai

//     'game1' : 'GTA-5',
//     'game2' : 'vegas',

// }

// for (const [key,val] of myObject) {
//     console.log(key, ' : ', val);
// } // give error " not iteratable ";

console.log(); 

//  ITERATOR OF OBJECT 

// FOR-IN  LOOP  

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
 }

 for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
 }
//     for (const key in myObject) {
//       console.log(key);
//    }

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
console.log(programming[key]);
 } // for in lop is also apply in array 

programming.forEach( (item, index, arr) => {
console.log(item, index, arr);
})

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js"
  },
  {
    languageName: "java",
    languageFileName: "java"
  },
  {
    languageName: "python",
    languageFileName: "py"
  }
] 

myCoding.forEach( (item)=>{ 
    console.log(item.languageName);
} )

