const user = {
  name: "Adarsh",
  age: 21,
  city: "Delhi"
};

const { name, age } = user;
const { country = "India" } = user;// default value 

const { name: userName, age: userAge } = user; // name ko userName mein rename kr diya gya hai 
console.log(userName, userAge);
