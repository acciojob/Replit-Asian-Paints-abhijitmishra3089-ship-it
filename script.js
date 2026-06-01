const style=document.createElement("style");
style.innerText=`
#grid-container{
display:grid;
grid-template-rows:repeat(3,1fr);
grid-template-columns:repeat(3,1fr);
gap:5px;
padding:4px;
/*background-color:black;*/
}
.grid-item{
	height:150px;
	border:1px solid black;	
}
#change_button {
margin:3px;
padding:10px;
border-radius:5px;
}
#Reset{
margin:3px;
padding:10px;
border-radius:5px;
}
#block_id{
padding:10px;
border-radius:5px
}
#color_id{
padding:10px;
border-radius:5px
}`;
	document.head.appendChild(style);
const grid = document.createElement("div");
grid.className = "grid-container";
document.body.appendChild(grid);

for (let i = 1; i <= 9; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.innerText = i;
    grid.appendChild(gridItem);
}

const blockin = document.createElement("input");
blockin.id = "block_id";
document.body.appendChild(blockin);

const blockco = document.createElement("input");
blockco.id = "colour_id";
document.body.appendChild(blockco);

const button = document.createElement("button");
button.id = "change_button";
button.innerText = "Change";
document.body.appendChild(button);

const resetBtn = document.createElement("button");
resetBtn.id = "reset_button";
resetBtn.innerText = "Reset";
document.body.appendChild(resetBtn);
button.addEventListener("click", () => {
    const blockId = Number(blockin.value);
    const color = blockco.value;

    const blocks = document.querySelectorAll(".grid-item");

    if(blockId >= 1 && blockId <= blocks.length){
        blocks[blockId - 1].style.backgroundColor = color;
    } else {
        alert("Invalid Block ID");
    }
});
buttons.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(block => {
        block.style.backgroundColor = "";
    });

    blockin.value = "";
    blockco.value = "";
});
document.body.appendChild(buttons);