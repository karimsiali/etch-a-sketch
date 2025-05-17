let container = document.querySelector(".container");
let btn = document.querySelector("button");
let defaultSize = 16;
let bgColor = "black";


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
            e.target.style.backgroundColor = randomColor() /*bgColor*/;
            e.target.style.opacity = +(e.target.style.opacity) + 0.1;
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
    let newSize;
    do {
        newSize = prompt("Grid size");        
    } while (+newSize > 100);

    if (newSize != null) {
        removeGrid();
        createGrid(newSize);
    } 
})
