 document.getElementById('kashmir').onclick = function(){
    alert("Heaver of the world");
 } // ye approach thik hai pr sahi nhi hai hmko ye feature kafi kam deta hai iss liye hmko event listener use krna chahiye 

document.getElementById('leh').addEventListener('click' , function(){
    setTimeout(() => {
    alert("Leh & ladakh ");
}, 3000); // 3 sec ke bad popup hoga alert 
})

//  Event Listener 

document.getElementById('leh').addEventListener('click' , function(e){
    console.log(e);
    
},false) // false is the default value 

// types of event :-  timestamp ; defaultPreventeed ; target ; srcElement ; currentTarget ; clientX, clienty, screenX, screenY, altkey, ctrlkey, shiftkey, keyCode  

// EVENT PROPAGATION

document.getElementById('images').addEventListener('click', function(e){
console.log("clicked inside the ul");
}, true)

document.getElementById('cherry').addEventListener('click', function(e){
console.log("clicked Cherry");
}, true)// isko bolte hai capturing mode 

document.addEventListener("DOMContentLoaded", function () {
document.getElementById('link').addEventListener('click', function (e) {
        e.preventDefault();       // stops Google opening
        e.stopPropagation();      // stops bubbling
        console.log("google clicked");
    }, false);

});




// *****************

// let p = document.querySelector("p");
//     p.addEventListener("dblclick", function () {
//         p.style.color = "yellow";
// });


// //remove event listener 

// p.removeEventListener("dblclick",function(){
//     console.log("yellow");
    
// });


let p = document.querySelector("p");
    function dblclick() {
    p.style.color = "yellow";
}
  p.addEventListener("dblclick", dblclick);
  p.removeEventListener("dblclick", dblclick);

  // COMMON EVENT_LISTENER

  //  ***   INPUT  ***

let input = document.querySelector("input");
    input.addEventListener("input", function () {
        console.log("typed");
    });

let inpt = document.querySelector("input");
    inpt.addEventListener("input", function (data) {
        console.log(data);
    });

let inp = document.querySelector("input");
    inp.addEventListener("input", function (d) {
        if(d.data!==null){  
        console.log(d.data);
        }
    });

    // isme pehla adta function ke adr ka attribue hai orr dusra wala data retrive ke rhat hai jo bhi input denge wo dikhayega console mein hum log first wala data ke place pr koi bhi name de sakte hai 

 //   ***   CHANGE   ***
 
 
// change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye
    let sel = document.querySelector("select");
        sel.addEventListener("change", function (dets) {
        console.log(dets.target.value);
    }); // value mein hmko value"_" double cote ke andr wala milega 

 let device = document.querySelector("#device");
    sel.addEventListener("change", function (dets) {
    device.textContent = `${ dets.target.value} Device Selrcted`
});

// Mouse Events :- click, dblclick, contextmenu, mousedown, mouseup, mouseenter, mouseleave, mousemove, mouseover, mouseout
// Keyboard Events :- keydown, keyup, keypress
// Form Events :- submit, change, input, focus, blur, reset
// Window & Document Events :- load, DOMContentLoaded, resize, scroll, unload
// Touch & Drag Events :- touchstart, touchmove, touchend, dragstart, dragover, drop

