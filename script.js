let gridCntr = document.querySelector(".grid-container")
let normalBtn = document.querySelector(".normal");
let rainbowBtn = document.querySelector(".rainbow");
let clearBtn = document.querySelector(".clear");
let slider = document.getElementById("myRange");
let output = document.getElementById("gridSize");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    gridCntr.innerHTML = "";
    output.innerHTML = `${this.value} x ${this.value}`;
    genDivs();
}; 

function genDivs() { 
    let v = parseInt(output.innerHTML);
    
    for (let i = 0; i < v; i++) { 
        let row = document.createElement("div"); 
        row.className = "row";
        row.style.width = "0.3em"; 
        row.style.backgroundColor = "white";
        for (let x = 1; x <= v; x++) { 
            let cell = document.createElement("div"); 
            cell.className = "gridsquare";
            cell.style.backgroundColor = "beige";
            cell.style.border = "none"; 
            cell.style.height = "0.3em";
            cell.style.width = "0.3em";
            row.appendChild(cell); 
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            });
        
            gridCntr.appendChild(row);    

            normalBtn.addEventListener("click", () => {
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = "black";
                });
            });

            rainbowBtn.addEventListener("click", () => {
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = "green";
                });
            });

            clearBtn.addEventListener("click", () => {
                cell.style.backgroundColor = "beige";
            });
        };
    
    };
};  

genDivs();

// resetBtn.addEventListener("click", () => {
    // genDivs();
// });

