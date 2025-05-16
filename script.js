let container = document.querySelector(".container");
let gridSize = 16;
let bgColor = "black";

console.log("width is: "+container.style.width);
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square");
        squareDiv.style.width = (1 / gridSize * 100) + "%";
        squareDiv.style.height = (1 / gridSize * 100) + "%";
        container.appendChild(squareDiv);
    }
}

container.childNodes.forEach((div) => {
    div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = bgColor;
    })
})