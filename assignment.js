'use strict';

var colorArray = [ 'white', 'red', 'yellow', 'LawnGreen', 'coral', 'lightskyblue', 'orchid', 'springgreen', 'black', 'gold'];
var currentColour = 'white';
var mouseButtonOn = false;

function generatePalette (arr){
  var paletteHandle = document.querySelector('.palette');
  var colorHandle = [];

  for (var i = 0; i < arr.length; i++) {
    colorHandle[i] = document.createElement('div');
    paletteHandle.appendChild(colorHandle[i]);
    colorHandle[i].style.backgroundColor = arr[i];
    colorHandle[i].style.borderRadius = '500px';
    colorHandle[i].style.height = '150px';
    colorHandle[i].style.width = '10%';
    colorHandle[i].style.boxSizing = 'border-box';
    colorHandle[i].style.float = 'left';
    colorHandle[i].style.padding = '5px';
    colorHandle[i].className = arr[i];

  }


}

function generateGrid (rowNum, colNum) {

  //var rowIndex = 0;
  var canvasHandle = document.querySelector('.canvas');
  var rowHandle = [];
  var pixelWidth = Math.ceil(1000 / rowNum);
  var pixelHeight = Math.ceil(500 / colNum);
  var colHandle = [];
  var pixelBorder = 1;
  var canvasWidth = 1000;

  for (var i = 0; i < colNum; i++) {
    rowHandle[i] = document.createElement('div');

    canvasHandle.appendChild(rowHandle[i]);
    rowHandle[i].style.boxSizing = 'border-box';
    rowHandle[i].className = "row";
    rowHandle[i].style.width = canvasWidth +'px';
    rowHandle[i].style.height = pixelHeight + 'px';
    //rowHandle[i].style.float = 'block';
    // rowHandle[i].style.display = 'block';
    rowHandle[i].style.padding = '5';



    for (var j = 0; j < rowNum; j++) {

      colHandle[j] = document.createElement('div');
      rowHandle[i].appendChild(colHandle[j]);
      colHandle[j].className = "pixel";
      colHandle[j].style.boxSizing = 'border-box';
      // colHandle[j].style.position = 'relative';
      colHandle[j].style.width = pixelWidth + 'px';
      colHandle[j].style.height = pixelHeight + 'px';
      colHandle[j].style.float = 'left';
      colHandle[j].style.display = 'inline-block';
      colHandle[j].style.background = 'white';

      colHandle[j].style.border = pixelBorder.toString() + 'px solid black';





    }
  }
}

generateGrid (100, 50);
generatePalette (colorArray);
document.querySelector('.canvas').addEventListener('mouseover',function (event) {
  var pixelClicked = event.target;

  if (mouseButtonOn) {

    pixelClicked.style.backgroundColor = currentColour;
    pixelClicked.style.border = 'none';

  }

});

document.querySelector('.canvas').addEventListener('mousedown', function (event) {

  mouseButtonOn = true;

});

document.querySelector('.canvas').addEventListener('mouseup', function (event) {

  mouseButtonOn = false;
  
});

document.querySelector('.palette').addEventListener('click',function (event) {
  var cName = "";
  var colourClicked = event.target;
  var indicator = document.querySelector('.colourIndicator');

  cName = colourClicked.className;
  //alert(cName);
  currentColour = cName;
  indicator.style.backgroundColor = cName;
  //alert(currentColour);

});
