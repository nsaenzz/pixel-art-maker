//Make Grid
function makeGrid(e) {
	//no refresh page
	e.preventDefault();
	// Selected input
	const grigHeight = document.getElementById('inputHeight').value;
	const grigWidth = document.getElementById('inputWidth').value;
	//get table
	const gridTable = document.getElementById('pixelCanvas');
	//delete old grid
	gridTable.innerHTML = "";
	//create a new grid
	for(let i = 0; i < grigHeight; i++){
		const rowTable = document.createElement("tr");
		for(let j = 0; j < grigWidth; j++){
			const colunmTable = document.createElement("td");
			//add background color white
			colunmTable.style.backgroundColor = '#ffffff';//'rgb(255, 255, 255)';
			//Add the event listener
			colunmTable.addEventListener("click", changeColorColumn);
			//append the column to the row
			rowTable.appendChild(colunmTable);
		}
		//append the row to the table
		gridTable.appendChild(rowTable);
	}

}

//Change color of the square or make it white
function changeColorColumn(e){
	const gridTd = e.target
	// get selected Select color input
	const gridColorPickerHex = document.getElementById('colorPicker').value;
	//get quare background color and convert it to hex
	const gridTdColorHex = backgroungRgbToHex(gridTd.style.backgroundColor);

	//if input color is different that backgound square change it to the input color
	if(gridTdColorHex !== gridColorPickerHex){
		gridTd.style.backgroundColor = gridColorPickerHex;
	}
	//if input color is the same as the background square put it back to white.
	else{
		gridTd.style.backgroundColor = 'rgb(255, 255, 255)';
	}
}


//Change a RGB background to hex
function backgroungRgbToHex(rgb){
	//spliting the text so I can get an array of RGB colors
	const redGreenBlue = rgb.substring(4, rgb.length-1).split(", ");
	//converting the rgb to hex
	var red = decimalToHext(redGreenBlue[0]);
	var green = decimalToHext(redGreenBlue[1]);
	var blue = decimalToHext(redGreenBlue[2]);
 	return "#"+red+green+blue;
}


//convert a decimal returning hex value
function decimalToHext(decimal){
	// get the hex value
	let hex = Number(decimal).toString(16);
	//add a 0 to the from if hex is only has one lenght.
	if (hex.length < 2) {
       hex = "0" + hex;
  	}
  	return hex;
}

//get the grid form
const grigForm = document.getElementById("sizePicker");
// When size is submitted by the user, call makeGrid()
grigForm.addEventListener("submit", makeGrid);

