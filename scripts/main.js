
function containerBuilder(){
    let body = document.getElementsByTagName("BODY")[0];

    let container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);

}

function gridBuilder(size) {
  
    containerBuilder();
    container = document.getElementById("container");


    for(let i = 0; i < size; i++){

        for(let j = 0; j < size; j++){

            let square = document.createElement("div");
            square.classList.add("square");

            container.appendChild(square);

        }
    }

}

function containerDestroyer(){
    let container = document.getElementById("container");

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    container.parentNode.removeChild(container);

}

function promptGrid(){
    let size;

    while (typeof size === "undefined"){
        let x = prompt("Type in a number(max 100) for the size of the new grid:","16");
        let xNumber = parseInt(x);
        
        if(typeof xNumber === "number" && xNumber > 0 && xNumber < 101) {
            size = xNumber;
        }
    }

    containerDestroyer();
    gridBuilder(size);
}

function buttonListener(){
    let button = document.getElementById("resetButton");

    button.addEventListener("click",function(){
        promptGrid();
    })
}

function main() {
    gridBuilder(16);
    buttonListener();

}

window.onload = main();

