const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Generate Grid";

container.appendChild(btn);

btn.addEventListener("click", () => {
    grid.removeChild(grid.firstChild);
    let columnSize = prompt("Input the grid column size");
    let rowSize = prompt("Input the grid row size");
    createGrid(columnSize, rowSize);
});

const grid = document.createElement("div");
grid.classList.toggle("gridHouse");

createGrid = (columnSize, rowSize) => {
    const gridArea = document.createElement("div");
    gridArea.classList.toggle("paintArea");

    grid.appendChild(gridArea);

    for (let i = 0; i < columnSize; i++) {
        const gridCol = document.createElement("div");
        gridCol.classList.toggle("col");

        gridArea.appendChild(gridCol);

        for (let r = 0; r < rowSize; r++) {
            const gridRow = document.createElement("div");
            gridRow.classList.toggle("row");

            gridCol.appendChild(gridRow);
        }
    }
};

container.appendChild(grid);

createGrid();

grid.addEventListener("mouseover", (color) => {
    color.target.style.backgroundColor = "red";
});