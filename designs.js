const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');


// This eventListener changes the size of the grid
form.addEventListener('submit', function (e) {
    pixelCanvas.innerHTML = '';
    e.preventDefault();
    makeGrid();
});

// This eventListener allows the user to choose color
pixelCanvas.addEventListener('click', function (e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = colorPicker.value;
    }
})

// This function makes the grid for the user
function makeGrid() {
    for (let i = 0; i < rowsNumber.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < cellsNumber.value; j++) {
            row.insertCell(0);
        }
    }
}
