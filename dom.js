 //   DOM-MANIPULATION 
 // RULES OF DOCUMENT MANIPULATION 

// html se element select karna badalna 
// text badalna badalna 
// html badalna badalna 
// css badalna badalna 
// attribute badalna 
// event listeners badalna 

let abcd = document.getElementById("qwe");
console.log(abcd); 

let doc = document.querySelector("h1") // pehla wala h1 hi select hoga kyunki querySelector pehla wala hi select krta hai 
let docs = document.querySelectorAll("h1")
console.log(docs) // array jaisa return krta hai "Nodelist" pr ye array nhi hai 

let h1=document.querySelector("h1");
h1.innerText="Dom padh rhe hai";
console.log(h1);
h1.innerHTML="<i>Hey bro what'sUp</i>";
console.log(h1);

let a = document.querySelector("a");
a.href = "https://www.google.com"; // first way to set
a.setAttribute("href", "https://www.google") // 2nd way to set 
console.log(a.getAttribute("href"));
a.removeAttribute("href"); // remove href tag wala
 


// CHAI🍵 or CODE 🧑‍💻

document.getElementById('title').id // .id se id ka nam aa jayega ; agar hmko kooch bhi chahiye to hum " . " operator ka use kr sakte hai 

document.getElementById('title').class // but class likhne se undefine aa jata hai 

document.getElementById('title').className // hmlog className ka use krta hai class ka name to pakadne ke liye 

document.getElementById('title').getAttribute // ye ek function return krega jisme sara attributr hoga uss id ka 

document.getElementById('title').getAttribute('id') // hmlog bracket ke andr colon de kr bata sakte hai hme kon sa attribute chahiye 

document.getElementById('title').getAttribute('class') 

document.getElementById('title').setAttribute('class' , 'test') // ye overwrite kr dega class ko  { class ka nam heading se badal kr test ho gya hai jo hum inspect kr ke check kr sakte hai }

document.getElementById('title').setAttribute('class' , 'test heading') // multiple id set kr sakte hai 

title.style.backgroundColor = '#ffd6cc';// hmlog style by add kr sakte hai {not a good practice of setting style " just for knowledge"}

title.style.padding = " 20px " 

title.style.color = "#ff704d" 

title.style.border = " 10px solid white " 

one.innerText // inner text wo text dikhata hai jo us particular time pe vissible hai jo hum kissi property se hata chuke hai  

one.textContent // par text content uss id ke ander ka sara text batata hai chahe wo vissible ho ya nhi ho 

one.innerHTML // innerHTML kisi element ke andar ka sab kuch nikal kar deta hai—chahe wo text ho ya HTML tags.


//  MOST USED SELECTOR FOR REAL LIFE PROBLEM 

document.querySelector('h2'); // name of the tag select krta hai 

document.querySelector('#title') // Ye CSS ke selector ke trh hota hai jo id select krta ha 

document.querySelector('.heading')// Ye CSS ke selector ke trh hota hai jo class select krta ha 

document.querySelector('input[type="password"]') // humlog css ke kisi bhi property ko bhi select kr sakte hai 

// document.querySelector(' yahan pr css ke sare selector ko use kr sakte hai ') manipulation ke liye 

const myUl = document.querySelector('ul')

const list = myUl.querySelector('li')

list.style.backgroundColor = " #b3e6ff"
list.style.padding = '5px'

const tempLiList = document.querySelectorAll('li')
// this will return NODELIST where we can get all three list item 
// NODELIST is "not Array" but having Some property of Array which we can see on the prototyping of the NodeList
// Node list is not pure Array 

// tempLiList.style.color = 'green'; // ❌ ERROR
// mana ye Array nhi hai pr Array jaisa hai to hmko batrana padega ki kon sa elemt pr property lagana hai 
tempLiList[0].style.color = 'maroon';

// Agar ek hi element ho tab bhi hme batana padta hai index usko 

tempLiList.forEach(function (l){
    l.style.backgroundColor = '#66ff66'
    l.style.color = " #005580"
})

// const tempListClass = document.getElementsByClassName(list-item) // this will give us a HTMLCollection[]

// // isme looping ka kooch bhi nhi hain  hme HTMLColletion ko convert krna padega 

// const convertedArray =  Array.from(tempListClass) // abb ye HTMLCollection se Array mein convert kr liye hai 

// convertedArray.forEach(function(li){
//   li.style.color = 'orange'
// });


//  WELCOME TO PART 2 OF DOM 

const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children); // return HTML colletion 
// console.log(parent.children [1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i]?.innerHTML);
}

parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector('.days');
console.log(dayOne); 

console.log(dayOne.parentElement); 

console.log("NODES" , parent.childNodes);
// node is complex tree like structure which count newline as well as spaces also 
// Count them :- 7:<div class="days"> elements and 8:text nodes (newlines + spaces) comment ko bhi ginta hai 

// CREATE NEW ELEMENT 

const div = document.createElement('div')
console.log(div);
div.className = "main"
// div.id = Math.round(Math.random() * 10 + 1)
div.id = "mainId"
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// Abhi ye div memory mein hai page mein show nhi aho rha hai 

const addText =document.createTextNode("Chai or Code")
div.appendChild(addText)
document.body.appendChild(div) 
                        
// div.innerText = "chai or code "  2nd method

