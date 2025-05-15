const grid = document.querySelector(".container");

const btn = document.createElement("button")
btn.textContent = "Generate Grid"

grid.appendChild(btn)

function gridCreateCol() {
    for (let i = 0; i < 16; i++) {
        const squareBoxCol = document.createElement("div");
        squareBoxCol.classList.add("col");

        grid.appendChild(squareBoxCol);

        for (let r = 0; r < 16; r++) {
            const squareBoxRow = document.createElement("div");
            squareBoxRow.classList.add("row");
    
            squareBoxCol.appendChild(squareBoxRow);
        }
        
    }

};

gridCreateCol();

grid.addEventListener('mouseover', (color) => {
color.target.style.backgroundColor = 'red';
console.log("Hovered");
});