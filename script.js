let container = document.querySelector(".container");
let btn = document.querySelector("button");
let defaultSize = 16;
let bgColor = "black";

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square");
            squareDiv.style.width = (1 / gridSize * 100) + "%";
            squareDiv.style.height = (1 / gridSize * 100) + "%";
            container.appendChild(squareDiv);
        }
    }
    draw();
}

createGrid(defaultSize);

function draw() {
    container.childNodes.forEach((div) => {
        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = bgColor;
        })
    })
}

function removeGrid() {
    container.innerHTML = "";
}



btn.addEventListener("click", () => {
    let newSize;
    do {
        newSize = prompt("Grid size");
    } while (+newSize > 100);

    removeGrid();
    createGrid(newSize);
    
})

