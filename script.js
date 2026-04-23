const style=document.createElement("style");
style.innerText=`
#grid-container{
display:grid;
grid-template-rows:repeat(3,1fr);
grid-template-columns:repeat(3,1fr);
gap:5px;
padding:4px;
// background-color:black;
}
#grid-item{
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
const grid=document.createElement("div");
grid.id="grid-container";
document.body.appendChild(grid);
for (let i = 0; i <9; i++) {
	const gridItem=document.createElement("div");
	gridItem.id="grid-item";
	grid.appendChild(gridItem);
}
const blockin=document.createElement("input");
blockin.id="block_id";
blockin.placeholder="enter block id"
document.body.appendChild(blockin);
const blockco=document.createElement("input");
blockco.id="color_id";
blockco.placeholder="enter your color"
document.body.appendChild(blockco);
const button=document.createElement("button");
button.id="change_button";
button.innerText="Change color"
document.body.appendChild(button);
const buttons=document.createElement("button");
buttons.id="Reset";
buttons.innerText="reset button"
document.body.appendChild(buttons);