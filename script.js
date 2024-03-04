let gridCntr = document.querySelector(".grid-container")
let penColor = document.querySelector("#pen-color");
let normalBtn = document.querySelector(".normal-button");
let rainbowBtn = document.querySelector(".rainbow-button");
let eraserBtn = document.querySelector(".eraser-button");
let clearBtn = document.querySelector(".clear-button");
let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    gridCntr.innerHTML = "";
    output.innerHTML = `${this.value} x ${this.value}`;
    genDivs();
};

function genDivs() {
    let v = parseInt(output.innerHTML);

    gridCntr.innerHTML = "";

    for (let i = 0; i < v; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        row.style.flex = "1";
        row.style.backgroundColor = "white";
        
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.style.backgroundColor = "beige";
            cell.style.display = "flex";
            cell.style.flex = "1";
        
            cell.addEventListener("mouseover", handleMouseOver);

            row.appendChild(cell);
        }

        gridCntr.appendChild(row);
    }
}

// Event listener function for "mouseover"
function handleMouseOver() {
    if (normalBtn.classList.contains("active")) {
        this.style.backgroundColor = "black";
    } else if (penColor.classList.contains("active")) {
        this.style.backgroundColor = penColor.value;
    } else if (rainbowBtn.classList.contains("active")) {
        this.style.backgroundColor = "green";
    } else if (eraserBtn.classList.contains("active")) {
        this.style.backgroundColor = "beige";
    } else if (clearBtn.classList.contains("active")) {
        this.style.backgroundColor = "black";
    } else {
        this.style.backgroundColor = "black";
    }    
};

// Attach event listeners for the mode buttons outside the genDivs function
penColor.addEventListener("click", () => {
    penColor.classList.add("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

normalBtn.addEventListener("click", () => {
    normalBtn.classList.add("active");
    penColor.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.add("active");
    penColor.classList.remove("active");
    normalBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
    eraserBtn.classList.add("active");
    penColor.classList.remove("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

clearBtn.addEventListener("click", () => {
    clearBtn.classList.add("active");
    penColor.classList.remove("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");

    // Loop through all cells and set background color to beige
    let cells = document.querySelectorAll(".gridsquare");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "beige";
    });
});

// Initial generation of divs
genDivs();


