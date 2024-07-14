//let Btn1=document.querySelector("#Btn1");

/*Btn1.onclick=()=>{
    console.log("Btn1 was Clicked");
    let a=25;
    a++;
    console.log(a);//26
}

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("your are inside div");
};

Btn1.onclick=(evt)=>{
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX,evt.clientY); // game jo postion pe depend karta hai uss case main hum client x,y ka use karte hai
};

//EVENT LISTENERS

let Btn1=document.querySelector("#Btn1");


Btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});


Btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
})

let Btn1=document.querySelector("#Btn1");


Btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked-handler1");
});

Btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler2");
});

const handler3=()=>{
    console.log("button1 was clicked-handler3");
}

Btn1.removeEventListener("click",handler3);

Btn1.addEventListener("click",()=>{
    console.log("button1 was clicked-handler4");
});

Btn1.removeEventListener("click",handler3);*/

//let's practice

//Qs-1

let ModeBtn=document.querySelector("#Mode");
let body=document.querySelector("body");
let currMode="light";//dark 

ModeBtn.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
   }else{
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currMode);
});

