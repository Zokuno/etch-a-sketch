 function genDivs(v) { 
    let e = document.querySelector(".grid-container"); // whatever you want to append the rows to: 
    let resetBtn = document.querySelector(".reset");
    for (let i = 0; i < v; i++) { 
         let row = document.createElement("div"); 
         row.className = "row";
        //  row.style.width = "25px" 
        //  row.style.height = "100px" 
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
                cell.style.backgroundColor = "black";}
            );
            resetBtn.addEventListener("click", () => {
                cell.style.backgroundColor = "beige";
            });
        } 
        e.appendChild(row); 
    } 
    // document.querySelector("code").innerText = e.innerHTML;
}

// let resetBtn = document.querySelector(".reset");


genDivs(50);

