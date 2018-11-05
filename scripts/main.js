var body = document.getElementsByTagName("BODY")[0];

function containerBuilder(){
    let container = document.createElement("div");
    container.id = "container";

    body.appendChild(container);

}

function gridBuilder(height,width) {
    let container = document.getElementById("container");

    if(container === null) {
        containerBuilder();
        container = document.getElementById("container");
    }


    for(let i = 0; i < height; i++){

        for(let j = 0; j < width; j++){

            let square = document.createElement("div");
            square.classList.add("square");

            container.appendChild(square);

        }
    }

}

