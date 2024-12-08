let btn= document.querySelector("#guessBtn")

let light1 = document.querySelector("#primaFila")
let light2 = document.querySelector("#secondaFila")
let light3 = document.querySelector("#terzaFila")
let light4 = document.querySelector("#quartaFila")

let bg = ["defaultBg", "redBg" , "greenBg"]

let i = 0


function handleClick(userfield){

    let timerId1 = setTimeout(function changeColor(){
        light1.classList.remove(bg[0]);
        light1.classList.add(bg[1]);
    }, 1500)
    
    console.log(timerId1)
}


btn.addEventListener(handleEvent("click"), handleClick)
