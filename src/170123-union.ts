(()=>{
    interface Car {
        drive(): any;
        stop(): any;
    }

    interface Bird {
        fly(): any;
        layEggs(): any;
    }

    interface Fish {
        swim(): any;
        layEggs(): any;
    }

    function getSmallPet(): Fish | Bird {
        // ...
        return {
            swim: () => { },
            layEggs: () => { }
        }
    }

    let pet = getSmallPet();
    pet.layEggs(); // okay
    (<Fish>pet).swim();  // errors

    //function isFish(pet: Fish | Bird): boolean {
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;

    }
    //if (typeof pet === 'Fish') {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }

    //
    // Exercise
    // Fish | Bird => Fish | Bird | Car

})();

(()=>{
    // watch out the type of padding
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
})();

(()=>{
    function f(sn: string | null): string {
        if (sn == null) {
            return "default";
        }
        else {
            return sn;
        }
    }
})();

// like Swift optional
(()=>{
    function broken(name: string | null): string {
        function postfix(epithet: string) {
            return name!.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
        }
        name = name || "Bob";
        return postfix("great");
    }

    function fixed(name: string | null): string {
        function postfix(epithet: string) {
            return name!.charAt(0) + '.  the ' + epithet; // ok
        }
        name = name || "Bob";
        return postfix("great");
    }
})();

// discriminated union
(()=>{
    interface Square {
        kind: "square";
        size: number;
    }
    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }
    interface Circle {
        kind: "circle";
        radius: number;
    }
    interface Triangle {
        kind: "triangle";
        width: number;
        height: number;
    }

    type Shape = Square | Rectangle | Circle;

    function area(s: Shape): number {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
        }
    }

    type Shape2 = Square | Rectangle | Circle | Triangle;
    function assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }
    function area2(s: Shape2) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * s.radius ** 2;
            default: return assertNever(s); // error here if there are missing cases
        }
    }

})();