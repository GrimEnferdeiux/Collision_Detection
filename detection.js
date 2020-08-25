console.log('sad');
let mousex;
let mousey;
addEventListener('mousemove', (event) => {
    mousex = event.clientX;
    mousey = event.clientY;

})
var circles = document.getElementById('canvas');
var ctx = circles.getContext('2d');

function distance(x1, y1, x2, y2) {
    let coorx = x2 - x1;
    let coory = y2 - y1;
    return Math.sqrt(coorx ** 2 + coory ** 2);
}
function collision(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
    };

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(770, 700);
        ctx.arc(700, 700, 70, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(695, 690);
        ctx.arc(685, 690, 10, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(725, 690);
        ctx.arc(715, 690, 10, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    };
}
let object1;
let object2;
function c_shape() {
    object1 = new collision(700, 700, 100, 'turquoise');
    object2 = new collision(22, 22, 20, 'black');
}
   
function c_animate() {
    requestAnimationFrame(c_animate);
    ctx.clearRect(0,0, circles.width, circles.height);
    object1.update();
    object2.x = mousex;
    object2.y = mousey;
    object2.update();
    if (distance(object1.x, object1.y, object2.x, object2.y) <= object1.radius + object2.radius) {
        object1.color = 'teal';
        object2.color = 'white';
    } else {
        object1.color = 'turquoise';
        object2.color = 'black';
    }
}
c_shape();
c_animate();
collision();
