const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Generate Grid";

container.appendChild(btn);

btn.addEventListener("click", () => {
    grid.removeChild(grid.firstChild);

    let columnSize = prompt("Input the grid column size");
    if (columnSize > 100) {
        return alert("Grid column size cannot be greater than 100!!"),
        createGrid()
    };

    let rowSize = prompt("Input the grid row size");
    if (rowSize > 100) {
        return alert("Grid row size cannot be greater than 100!!"),
        createGrid()
    };

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

            gridRow.addEventListener("mouseover", (color) => {
                color.target.style.backgroundColor = "red";
            });
        }
    }
};

container.appendChild(grid);

createGrid(16,16);