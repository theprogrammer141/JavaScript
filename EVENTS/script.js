// let btn1 = document.querySelector("button");
// btn1.onclick = ()=>
// {
//     console.log("button is clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover = ()=>
// {
//     console.log("you are inside div");
// }

// let btn1 = document.querySelector("button");
// btn1.onclick = (evt)=>
// {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", (evt)=>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log("button is clicked");
// })

// btn1.addEventListener("click", (evt)=>
// {
//     console.log("button is clicked-handler 2");
// })

// let btn1 = document.querySelector("button");
// btn1.addEventListener("click", (evt)=>
// {
//     console.log("button is clicked-handler1");
// })
// btn1.addEventListener("click", (evt)=>
// {
//     console.log("button is clicked-handler2");
// })

// const  handler3 = ()=>
// {
//     console.log("button is clicked-handler3");
// }

// btn1.addEventListener("click", (evt)=>
// {
//     console.log("button is clicked-handler4");
// })

// btn1.removeEventListener("click",handler3);

// let btn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let current_mode = "light";

// btn.addEventListener("click",()=>
// {
//     if(current_mode === "light")
//     {
//         current_mode = "dark";
//         console.log(current_mode);
//         // body.style.backgroundColor = "black";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else
//     {
//         current_mode = "light";
//         console.log(current_mode);
//         // body.style.backgroundColor = "white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })

// let div = document.querySelector("#box");
// let body = document.querySelector("body");
// let current_mode = "light";

// div.addEventListener("mouseover",()=>
// {
//     div.innerHTML = "<i>you are inside div</i>";
//     body.style.backgroundColor = "black";
//     div.style.color = "white";
//     div.style.backgroundColor = "blue";
// })

// div.addEventListener("mouseout",()=>
// {
//     div.innerHTML = "<i>you are out of div</i>";
//     body.style.backgroundColor = "white";
//     div.style.color = "black";
//     div.style.backgroundColor = "aquamarine";
// })