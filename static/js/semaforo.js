let btn = document.querySelector("#guessBtn")
let light1 = document.querySelectorAll(".primaFila")
let light2 = document.querySelectorAll(".secondaFila")
let light3 = document.querySelectorAll(".terzaFila")
let light4 = document.querySelectorAll(".quartaFila")
let message = document.querySelector("#message")

let lights = [light1, light2, light3]
let bg = ["defaultBg", "redBg" , "greenBg"]

let esecuzione = false
let canClick = false

function restart() {
    let j = 0
    
    for(j = 0; j < light1.length; j++){
        light1[j].classList.remove(bg[1])
        light1[j].classList.add(bg[0])
    } 
    for(j = 0; j < light1.length; j++){
        light2[j].classList.remove(bg[1])
        light2[j].classList.add(bg[0])
    } 
    for(j = 0; j < light1.length; j++){
        light3[j].classList.remove(bg[1])
        light3[j].classList.add(bg[0])
    } 
    for(j = 0; j < light1.length; j++){
        light4[j].classList.remove(bg[1])
        light4[j].classList.add(bg[0])
    } 
}

function tempo() {
    let second = new Date 
    return second = second.getTime()
}

function calcReflex() {
    fine = tempo()
    riflessi = (fine - inizio) / 1000
    if (!esecuzione) {
        message.innerHTML = `Tempo reazione: <strong>${riflessi}</strong>!`
    }
}

function handleClick(event){
    console.log(event)

    let timerId1 = setTimeout(function changeColor() {
        let j = 0; 

        if(esecuzione) return;

        esecuzione = true;
        restart();

        for(j = 0; j < light1.length; j++){
            light1[j].classList.remove(bg[0])
            light1[j].classList.add(bg[1])
        } 
        let timerId2 = setTimeout(function changeColor(){
            for(j= 0; j < light1.length; j++){
                
                light2[j].classList.remove(bg[0])
                light2[j].classList.add(bg[1])
            } 

            let timerId3 = setTimeout(function changeColor(){
                for(j = 0; j < light1.length; j++){
                    light3[j].classList.remove(bg[0])
                    light3[j].classList.add(bg[1])
                } 
                
                let timerId4 = setTimeout(function testReflex(){
                    for(j= 0; j < light4.length; j++){
                        light4[j].classList.remove(bg[0])
                        light4[j].classList.add(bg[2])
                    } 
                    inizio = tempo()
                    canClick = true
                    if (canClick === true) {
                        btn.addEventListener("click", calcReflex)
                    }
                    
                    if(!canClick || !esecuzione){
                        restart();
                    }
                    esecuzione = false
                    canClick = false

                }, 2000)
            }, 2000)
        }, 2000)
    }, 1500)
}
btn.addEventListener("click", handleClick)