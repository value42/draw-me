var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var colorEl = document.getElementById("colorPicker");
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
var brushSize = document.getElementById("brushSize");
var clearBtn = document.getElementById("clearBtn");
var bodyEl = document.body;


var size = brushSize.textContent;
var isDrawing = false;
var color = colorEl.value
var x1 = undefined;
var y1 = undefined;
var increasing = false;


canvas.addEventListener('mousedown', e => {
    x1 = e.offsetX;
    y1 = e.offsetY;
    isDrawing = true;
    // drawEmoji(x1, y1);
    drawCircle(x1, y1)
  });

bodyEl.addEventListener('mouseup', e => {
    isDrawing = false;
});

canvas.addEventListener('mousemove', e => {
    if (isDrawing) {
        var x2 = e.offsetX;
        var y2 = e.offsetY;
        // drawEmoji(x2, y2);
        drawCircle(x2, y2);
        drawLine(x2, y2)
    }
})

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

increaseBtn.addEventListener('click', () => {
    size++
    brushSize.innerText = size
})

// increaseBtn.addEventListener('mousedown', () => {
//     increasing = true;
//     if (increasing) {
//         setTimeout(function(){ size += 5; }, 1000);
//         brushSize.innerText = size
//     };
//   });

// increaseBtn.addEventListener('mousedown', () => {
//     increasing = false;
//   });

decreaseBtn.addEventListener('click', () => {
    size--
    if (size < 3) { size = 3 }
    brushSize.innerText = size
})


colorEl.addEventListener('change', e => {
    color = e.target.value
  });


function drawLine(x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size*2;
    ctx.strokeStyle = color;
    ctx.stroke();
    x1 = x2;
    y1 = y2;
}

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawEmoji(x, y) {
    ctx.font = '40px serif'
    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle"; 
    ctx.fillText('🖤', x, y);
};