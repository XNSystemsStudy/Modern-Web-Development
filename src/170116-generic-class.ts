(()=>{
    class Shape {
        constructor (public x: number, public y: number) {}
    }
    class Circle extends Shape {
        constructor(x: number, y: number) {
            super(x, y);
        }
        circleOnly() {}

    }
    class Rectangle extends Shape {
        constructor(x: number, y: number) {
            super(x, y);
        }
        rectangleOnly() {}
    }

    (() => {
        class ShapeWrapper {
            constructor(private _shape: Shape) {

            }
            moveBy(x: number, y: number) {
                this._shape.x += x;
                this._shape.y += y;
                return this._shape;
            }
        }

        let circle = new ShapeWrapper(new Circle(0,0));
        circle.moveBy(10, 10).circleOnly();
    })();

    (() => {
        class ShapeWrapper <S extends Shape> {
            constructor(private _shape: S) {

            }
            moveBy(x: number, y: number): S {
                this._shape.x += x;
                this._shape.y += y;
                return this._shape;
            }
        }

        let circle = new ShapeWrapper(new Circle(0,0));
        circle.moveBy(10, 10).circleOnly();
        circle.moveBy(10, 10).rectOnly();

        let rect = new ShapeWrapper(new Rectangle(0,0));
        rect.moveBy(10, 10).rectangleOnly();
        rect.moveBy(10, 10).circleOnly();
    })();
})();
