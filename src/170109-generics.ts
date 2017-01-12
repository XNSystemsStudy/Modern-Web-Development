(function() {
    interface valueOnly {
        [index: string]: number;
    }
    function double(input:valueOnly): valueOnly {
        let key: string;
        for(key in input) { input[key] *= 2; }
        return input;
    }

    let input1 = {a:1, b:2};
    let doubled1 = double(input1);
    console.log(doubled1['a']);
    console.log(doubled1['b']);
    console.log(doubled1['c']);
})();

(function() {
    interface valueOnly {
        [index: string]: number;
    }
    function double<T extends valueOnly >(input:T): T {
        let key: string;
        for(key in input) { input[key] *= 2; }
        return input;
    }

    let input1 = {a:1, b:2};
    let doubled1 = double(input1);
    console.log(doubled1.a);
    console.log(doubled1['a']);
    console.log(doubled1.b);
    console.log(doubled1.c);
    console.log(doubled1['c']);

    let input2 = {a:1, b:2, c:3};
    let doubled2 = double(input2);
    console.log(doubled2.a);
    console.log(doubled2.b);
    console.log(doubled2.c);
})();

(()=>{
    'use strict'

    let a = {k0: 0, k1:1};
    let freezedA = Object.freeze(a);

    freezedA.k0 = 3;
    console.log(freezedA.k0); // Runtime Error if strict mode 
})();

(()=>{
    class Circle {
        constructor(public radius = 10) {}
    }
    class Retangle {
        constructor(public width = 10, public height = 10) {}
    }
    function createShape(type: string):any {
        switch (type) {
            case "circle":
                return new Circle();

            case "rect":
                return new Retangle();
        }
    }

    let circle = createShape("circle");
    let rectangle = createShape("rect");

    console.log(circle.width); // pass ERROR
    console.log(rectangle.radius); // pass ERROR
})();

(()=>{
    // refer: addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, useCapture?: boolean): void;
    class Circle {
        constructor(public radius = 10) {}
    }
    class Rectangle {
        constructor(public width = 10, public height = 10) {}
    }
    interface ShapeFactoryMap {
        "circle": Circle;
        "rect": Rectangle;
    }

    type x = ShapeFactoryMap["circle"];

    function createShape<K extends keyof ShapeFactoryMap>(type: K): ShapeFactoryMap[K];
    function createShape(type: any): any {
        switch (type) {
            case "circle":
                return new Circle();

            case "rect":
                return new Rectangle();
        }
    }

    let circle = createShape("circle");
    let rectangle = createShape("rect");

    console.log(circle.radius);
    console.log(circle.width);  // detect ERROR
    console.log(rectangle.radius); // detect ERROR
    console.log(rectangle.width);
})();