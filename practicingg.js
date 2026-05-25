let a = document.getElementById("box");
console.log(a.innerText)
a.innerText="Hello Adarsh";
console.log(a.innerText); // Ignores text inside elements hidden with CSS 
console.log(a.textContent); // Returns all text, even if it is hidden by CSS
console.log(a.innerHTML);

a.innerHTML = "<b>Hello</b> <i>World</i>";
console.log(a.innerHTML);

let aa = document.getElementById("name");
console.log(aa.value);

aa.type = "text";
console.log(aa.value);


  function changeText() {

  let msg = document.getElementById("msg");
  let user = document.getElementById("user");

  // innerText
  msg.innerText = "Welcome " + user.value;

  // After 2 sec → HTML
  setTimeout(()=>{
    msg.innerHTML = "<b>Thanks " + user.value + "</b> ❤️";
  },2000);
}














let img = document.querySelector("#pic");
// console.log(img);
 console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));

let inp = document.getElementById("email");
console.log(inp.getAttribute("type"));

img.setAttribute("src", "https://c.files.bbci.co.uk/2e18/live/347f4790-fd12-11ef-8c03-7dfdbeeb2526.jpg");

img.removeAttribute("alt");

console.log(img.getAttribute("alt"));
console.log(inp.getAttribute("type"));

let user = document.getElementById("user");
let btn = document.getElementById("btn");
console.log(user);
console.log(btn);

let t = document.querySelector("#msg");
t.style.color = "#f7be9c";
t.style.backgroundColor = "maroon";
t.style.fontfamily = "Gill Sans"
t.style.textDecoration = "underline";

t.classList.add("button"); // jo property se nhi kiye hai usi property ko intake krega sare ko nhi 
t.classList.add("button:hover");// ye add nhi hoga kyunki  sirf un labels (classes) ko handle karta hai jo aapne CSS mein . se banayi hain.
//  HTML classes mein : (colon) allow nahi hota. Jab aap classList.add("button:hover") likhte ho, toh browser ek aisi class dhundta hai jiska naam exact wahi ho, par CSS mein :hover ka matlab "state" (halat) hota hai.

t.classList.add("msg");
t.classList.remove("msg");



function mode() {
    // This targets the <body> tag directly
    document.body.classList.toggle("dark"); // add class ="dark";
}

let div = document.createElement("div");
console.log(div);
let txt = document.createTextNode("Hello Adarsh");
console.log(txt);
let dv =document.getElementsByTagName("div");
console.log(dv[0].innerHTML);

