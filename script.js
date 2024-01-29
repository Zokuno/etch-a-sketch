for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.background = "red";
        div.style.border = "solid"
        document.querySelector(".grid-container").appendChild(div);
    }
    let jump = document.createElement("br");
    document.querySelector(".grid-container").appendChild(jump);
}