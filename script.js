let container = document.querySelector(".container");
let btn = document.querySelector("button");
let erase = document.querySelector(".erase");
let color = document.querySelector("#color");
let opacity = document.querySelector("#opacity");
let input = document.querySelector("input");
let defaultSize = 16;


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.style.width = (1 / gridSize * 100) + "%";
            squareDiv.style.height = (1 / gridSize * 100) + "%";
            squareDiv.style.opacity = 0;
            container.appendChild(squareDiv);
        }
    }
    draw();
}


createGrid(defaultSize);


function draw() {
    container.childNodes.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
            if (color.value == "black") {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = randomColor();
            }
            
            if (opacity.value == "fixed") {
                e.target.style.opacity = "1";
            } else {
                e.target.style.opacity = +(e.target.style.opacity) + 0.1;
            }
            
        })
    })
}


function removeGrid() {
    container.innerHTML = "";
}


// Generate a random RGB color
function randomColor() {
    let r, g, b;

    r = Math.random() * (255 - 0) + 0;
    g = Math.random() * (255 - 0) + 0;
    b = Math.random() * (255 - 0) + 0;

    return `RGB(${r}, ${g}, ${b})`;
}


btn.addEventListener("click", (e) => {
    let newSize = input.value;
    if (+newSize <= 100 && newSize > 0) {
        defaultSize = newSize;
        removeGrid();
        createGrid(newSize);
    } else {
        alert("Wrong value, try again!");
    }
})


erase.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(defaultSize);
})
