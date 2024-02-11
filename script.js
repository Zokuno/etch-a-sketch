 function genDivs(v) { 
    let e = document.querySelector(".grid-container"); // whatever you want to append the rows to: 
    let normalBtn = document.querySelector(".normal");
    let rainbowBtn = document.querySelector(".rainbow");
    let resetBtn = document.querySelector(".reset");
    for (let i = 0; i < v; i++) { 
         let row = document.createElement("div"); 
         row.className = "row";
        //  row.style.width = "0.3em" 
        //  row.style.height = "0.3em" 
         row.style.backgroundColor = "white"
         for(let x = 1; x <= v; x++) { 
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
            normalBtn.addEventListener("click", () => {
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = "black";
            });
            });
            rainbowBtn.addEventListener("click", () => {
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = "green";
            });
            resetBtn.addEventListener("click", () => {
                cell.style.backgroundColor = "beige";
            });
           
            });
        } 
        e.appendChild(row); 
    } 
}



genDivs(100);

