const grid = document.querySelector("div");

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

const hover = document.querySelector("#row");

hover.addEventListener('mouseover', function() {
  hover.style.backgroundColor = 'lightblue';
});