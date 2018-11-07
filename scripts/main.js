
function containerBuilder(size){
    let body = document.getElementsByTagName("BODY")[0];

    let container = document.createElement("div");
    container.id = "container";

    size = size.toString();

    container.style.display = "grid";
    container.style.gridTemplateRows = "repeat(" + size + ", auto)";
    container.style.gridTemplateColumns = "repeat(" + size + ", auto)";

    body.appendChild(container);

}

function gridBuilder(size) {
  
    containerBuilder(size);
    container = document.getElementById("container");


    for(let i = 0; i < size; i++){

        for(let j = 0; j < size; j++){

            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover",function(){
                squareColor(this);
            });

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

function squareColor(obj) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    obj.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

}

function main() {
    gridBuilder(16);
    buttonListener();

}

window.onload = main();

