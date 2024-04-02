// Query Selector List
let gridCntr = document.querySelector(".grid-container");
let gridSquare = document.querySelector(".gridsquare");
let penColor = document.querySelector("#pen-color");
let penDefault = document.querySelector(".pen-default");
let fillGrid = document.querySelector("#fill-grid");
let normalBtn = document.querySelector(".reset-button");
let rainbowBtn = document.querySelector("#rainbow-checkbox");
let opacityBtn = document.querySelector("#opacity-checkbox");
let clickmodeBtn = document.querySelector("#clickmode-checkbox");
let eraserBtn = document.querySelector(".eraser-button");
let clearBtn = document.querySelector(".clear-button");
let gridSizeSlider = document.getElementById("myRange");
let gridSize = document.getElementById("gridSize");


gridSize.innerHTML = `${gridSizeSlider.value} x ${gridSizeSlider.value} Grid`; // Displays the default slider value

// Updates the current slider value each time you drag the slider handle
gridSizeSlider.oninput = function () {
    gridCntr.innerHTML = "";
    gridSize.innerHTML = `${this.value} x ${this.value} Grid`;
    genDivs();
};

// Generates grid of divs dependent on slider value
function genDivs() {
    let v = parseInt(gridSize.innerHTML);

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
        this.style.backgroundColor = rainbowMode();
    } else if (opacityBtn.classList.contains("active")) {
        this.style.backgroundColor = "green";
    } else if (clickmodeBtn.classList.contains("active")) {
        let cells = document.querySelectorAll(".gridsquare");
        cells.forEach((cell) => {
            cell.removeEventListener("mouseover", handleMouseOver);
            cell.addEventListener("mousedown", handleMouseOver);
        });;
    } else if (eraserBtn.classList.contains("active")) {
        this.style.backgroundColor = fillGrid.value;
    } else if (clearBtn.classList.contains("active")) {
        this.style.backgroundColor = penColor.value;
    } else {
        this.style.backgroundColor = penColor.value;
    }    
};

// Returns random color using hexidecimals
function rainbowMode() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
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
    rainbowBtn.classList.remove("active");
    rainbowBtn.checked = false;
    opacityBtn.classList.remove("active");
    opacityBtn.checked = false;
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

penDefault.addEventListener("click", () => {
    penColor.classList.add("active");
    fillGrid.classList.remove("active");
    rainbowBtn.classList.remove("active");
    rainbowBtn.checked = false;
    opacityBtn.classList.remove("active");
    opacityBtn.checked = false;
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
    penColor.value = "#000000";
});

rainbowBtn.addEventListener("change", () => {
    if (rainbowBtn.checked) {
        rainbowBtn.classList.add("active");
     } else {
        rainbowBtn.classList.remove("active");
     }    
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    opacityBtn.classList.remove("active");
    opacityBtn.checked = false;
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

opacityBtn.addEventListener("click", () => {
    if (opacityBtn.checked) {
        opacityBtn.classList.add("active");
     } else {
        opacityBtn.classList.remove("active");
     }    
    rainbowBtn.classList.remove("active");
    rainbowBtn.checked = false;
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

clickmodeBtn.addEventListener("click", () => {
    if (clickmodeBtn.checked) {
        clickmodeBtn.classList.add("active");
     } else {
        clickmodeBtn.classList.remove("active");
     }    
    fillGrid.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
    eraserBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    rainbowBtn.classList.remove("active");
    rainbowBtn.checked = false;
    opacityBtn.classList.remove("active");
    opacityBtn.checked = false;
    clearBtn.classList.remove("active");
});

clearBtn.addEventListener("click", () => {
    clearBtn.classList.add("active");
    penColor.classList.remove("active");
    fillGrid.classList.remove("active");
    eraserBtn.classList.remove("active");
    // Loops through all cells and set background color to fillGrid value
    let cells = document.querySelectorAll(".gridsquare");
    cells.forEach((cell) => {
        cell.style.backgroundColor = fillGrid.value;
    });
});

// Initial generation of divs
genDivs();


