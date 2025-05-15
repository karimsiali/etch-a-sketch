let container = document.querySelector(".container");
let width = 16;
let height = 16;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square");
        container.appendChild(squareDiv);
    }
}