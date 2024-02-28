let gridCntr = document.querySelector(".grid-container")
let colorBtn = document.querySelector(".color-button");
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
    
    // Detach the grid container before modification
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
            
            // Attach the event listener for "mouseover" once
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
normalBtn.addEventListener("click", () => {
    normalBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.add("active");
    normalBtn.classList.remove("active");
    eraserBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
    eraserBtn.classList.add("active");
    normalBtn.classList.remove("active");
    rainbowBtn.classList.remove("active");
    clearBtn.classList.remove("active");
});

clearBtn.addEventListener("click", () => {
    clearBtn.classList.add("active");
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


// let colorBlock = document.getElementById('color-block');
// let ctx1 = colorBlock.getContext('2d');
// let width1 = colorBlock.width;
// let height1 = colorBlock.height;

// let colorStrip = document.getElementById('color-strip');
// let ctx2 = colorStrip.getContext('2d');
// let width2 = colorStrip.width;
// let height2 = colorStrip.height;

// let colorLabel = document.getElementById('color-label');

// let x = 0;
// let y = 0;
// let drag = false;
// let rgbaColor = 'rgba(255,0,0,1)';

// ctx1.rect(0, 0, width1, height1);
// fillGradient();

// ctx2.rect(0, 0, width2, height2);
// let grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
// grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
// grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
// grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
// grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
// grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
// grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
// grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
// ctx2.fillStyle = grd1;
// ctx2.fill();

// function click(e) {
//   x = e.offsetX;
//   y = e.offsetY;
//   let imageData = ctx2.getImageData(x, y, 1, 1).data;
//   rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
//   fillGradient();
// }

// function fillGradient() {
//   ctx1.fillStyle = rgbaColor;
//   ctx1.fillRect(0, 0, width1, height1);

//   let grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);
//   grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
//   grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
//   ctx1.fillStyle = grdWhite;
//   ctx1.fillRect(0, 0, width1, height1);

//   let grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);
//   grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
//   grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
//   ctx1.fillStyle = grdBlack;
//   ctx1.fillRect(0, 0, width1, height1);
// }

// function mousedown(e) {
//   drag = true;
//   changeColor(e);
// }

// function mousemove(e) {
//   if (drag) {
//     changeColor(e);
//   }
// }

// function mouseup(e) {
//   drag = false;
// }

// function changeColor(e) {
//   x = e.offsetX;
//   y = e.offsetY;
//   let imageData = ctx1.getImageData(x, y, 1, 1).data;
//   rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
//   colorLabel.style.backgroundColor = rgbaColor;
// }

// colorStrip.addEventListener("click", click, false);

// colorBlock.addEventListener("mousedown", mousedown, false);
// colorBlock.addEventListener("mouseup", mouseup, false);
// colorBlock.addEventListener("mousemove", mousemove, false);