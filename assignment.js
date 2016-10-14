'use strict';
function generateGrid (rowNum, colNum) {

  var rowIndex = 0;
  var canvasHandle = document.querySelector('.canvas');
  var rowHandle = [];
  var pixelWidth = Math.ceil(1000 / rowNum);
  var pixelHeight = Math.ceil(500 / colNum);
  var colHandle = [];
  var pixelBorder = 1;
  var canvasWidth = 1000;

  for (var i = 0; i < rowNum; i++) {
    rowHandle[i] = document.createElement('div');

    canvasHandle.appendChild(rowHandle[i]);
    rowHandle[i].style.boxSizing = 'border-box';
    rowHandle[i].className = "row";
    rowHandle[i].style.width = canvasWidth +'px';
    rowHandle[i].style.height = pixelHeight + 'px';
    //rowHandle[i].style.float = 'block';
    // rowHandle[i].style.display = 'block';
    rowHandle[i].style.padding = '5';



    for (var j = 0; j < colNum; j++) {

      colHandle[j] = document.createElement('div');
      rowHandle[i].appendChild(colHandle[j]);
      colHandle[j].className = "pixel";
      colHandle[j].style.boxSizing = 'border-box';
      colHandle[j].style.width = pixelWidth + 'px';
      colHandle[j].style.height = pixelHeight + 'px';
      colHandle[j].style.float = 'left';
      colHandle[j].style.display = 'inline';
      colHandle[j].style.background = 'white';

      colHandle[j].style.border = pixelBorder.toString() + 'px solid black';





    }
  }
}

generateGrid (2, 2);
