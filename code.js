// Added selector for container div and created button element //
const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.textContent = "Generate Grid";

container.appendChild(btn);

// Added listener for click event on button element to remove current child and add new child based on size provided //
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

// Creates a div for the grid to be housed and in //
const grid = document.createElement("div");
grid.classList.toggle("gridHouse");

// Random number generator for use in RGB color selection //
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 1000)
    let answer = ""

    if (randomNumber > 255) {
        return answer = Math.floor(randomNumber / 4)
    }
    else if (randomNumber < 255) {
        return answer = randomNumber
    }

    return answer
};

// Grid creation function //
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
                let a = getRandomNumber();
                let b = getRandomNumber();
                let c = getRandomNumber();
                color.target.style.backgroundColor = "rgb("+ a + ", " + b + ", " + c + ")";
                color.target.style.opacity -= "-0.1"
                if (color.target.style.opacity > 1) {
                    return color.target.style.opacity = 1
                }
            });
        }
    }
};

container.appendChild(grid);
// Inital grid creation or start location //
createGrid(16,16);