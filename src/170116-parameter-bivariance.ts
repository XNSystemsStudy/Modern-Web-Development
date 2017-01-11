(()=>{

class Shape {
    constructor(public x: number, public y: number) {}
    drawShape() {
        console.log("Shape::drawShape()");
    }
    draw() {
        this.drawShape();
    }
}

class Circle extends Shape {
    constructor(public radius: number, x: number = 0, y: number = 0) {
        super(x, y);
    }
    drawCircle() {
        console.log("Circle::drawCircle()");
    }
    draw() {
        this.drawCircle();
    }
}

function drawShape(shape: Shape) {
    try {
        shape.drawShape();
    }
    catch(e) {
        console.log("FAIL to call shape.drawShape()")
    }
}
function drawCircle(circle: Circle) {
    try {
        circle.drawCircle();
    }
    catch(e) {
        console.log("FAIL to call circle.drawShape()")
    }
}

function delayDraw(delay: number, shape: Shape, draw: (shape: Shape) => void) {
    setTimeout(draw, delay, shape);
}

let shape = new Shape(100, 100);
let circle = new Circle(10);

drawShape(shape);
drawCircle(shape); // NOT OK
drawShape(circle);
drawCircle(circle);

delayDraw(1000, shape, drawShape);
delayDraw(2000, shape, drawCircle); // OK ????
delayDraw(3000, circle, drawShape);
delayDraw(4000, circle, drawCircle);

function delayDrawShape(delay: number, shape: Shape) {
    setTimeout(() => { shape.draw() }, delay);
}

delayDrawShape(5000, shape);
delayDrawShape(6000, circle);

})();

