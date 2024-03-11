// Query Selector List
let gridCntr = document.querySelector(".grid-container");
let gridSquare = document.querySelector(".gridsquare");
let penColor = document.querySelector("#pen-color");
let fillGrid = document.querySelector("#fill-grid");
let normalBtn = document.querySelector(".normal-button");
let rainbowBtn = document.querySelector(".rainbow-button");
let eraserBtn = document.querySelector(".eraser-button");
let clearBtn = document.querySelector(".clear-button");
let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");


output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Updates the current slider value each time you drag the slider handle
slider.oninput = function () {
    gridCntr.innerHTML = "";
    output.innerHTML = `${this.value} x ${this.value}`;
    genDivs();
};

// Generates grid of divs dependent on slider value
function genDivs() {
    let v = parseInt(output.innerHTML);

    gridCntr.innerHTML = "";

    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        row.style.flex = "1";
        
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.style.backgroundColor = fillGrid.value;
            cell.style.display = "flex";
            cell.style.flex = "1";
        
            cell.addEventListener("mouseover", handleMouseOver);

            row.appendChild(cell);
        }

        gridCntr.appendChild(row);
    }
};

// Event listener function for "mouseover"
function handleMouseOver() {
      if (penColor.classList.contains("active")) {
        this.style.backgroundColor = penColor.value;
    } else if (rainbowBtn.classList.contains("active")) {
        this.style.backgroundColor = "green";
    } else if (eraserBtn.classList.contains("active")) {
        this.style.backgroundColor = fillGrid.value;
    } else if (clearBtn.classList.contains("active")) {
        this.style.backgroundColor = penColor.value;
    } else {
        this.style.backgroundColor = "black";
    }    
};

// Sets background color for all divs in grid
fillGrid.addEventListener("input", () => {
    let cells = document.querySelectorAll(".gridsquare");
        cells.forEach((cell) => {
            cell.style.backgroundColor = fillGrid.value;
    });
});

// Button Event Listeners
penColor.addEventListener("click", () => {
    penColor.classList.add("active");
    fillGrid.classList.remove("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

normalBtn.addEventListener("click", () => {
    normalBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
    fillGrid.value = "#F5F5DC";
    penColor.value = "#000000";
    let cells = document.querySelectorAll(".gridsquare");
        cells.forEach((cell) => {
            cell.style.backgroundColor = fillGrid.value;
        });
});

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    normalBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
    eraserBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

clearBtn.addEventListener("click", () => {
    clearBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");

    // Loops through all cells and set background color to fillGrid value
    let cells = document.querySelectorAll(".gridsquare");
    cells.forEach((cell) => {
        cell.style.backgroundColor = fillGrid.value;
    });
});

// Initial generation of divs
genDivs();


