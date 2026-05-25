// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// console.log("one");
// console.log("two");

// function hello (){
//     console.log("hello");
    
// }
// setTimeout(hello,3000);

// console.log("three");
// console.log("four");// three and four did not wait for hello to complete 

// setTimeout(()=>{
//     console.log("hello");
// },4000);  // another way of writing this 


// ******    PROMISE   ******

// PROMISE IS THE OBJECT IN JAVA SCRIPT 
let promise = new Promise((resolve, reject) => {
console.log("I am a promise"); 
});  