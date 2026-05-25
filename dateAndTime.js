let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let myNewDate = new Date(2026,1,5,8,9,3);//month in js are strt from 0
console.log(myNewDate.toLocaleString());

let nextDate = new Date("01-14-2026"); // is trh se declare krne se month 1 se strt hoga
console.log(nextDate.toLocaleString());

let timeStamp = Date.now();
console.log(timeStamp) // 1970 se current time tk ka milli sec deta hai
console.log(Math.floor(Date.now()/1000)); // convert to sec
