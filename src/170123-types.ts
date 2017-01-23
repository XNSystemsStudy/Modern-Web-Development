type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

(()=>{
    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number) {
            this.value += operand;
            return this;
        }
        public multiply(operand: number) {
            this.value *= operand;
            return this;
        }
        // ... other operations go here ...
    }

    let v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();


    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
        // ... other operations go here ...
    }

    let v2 = new ScientificCalculator(2)
        .multiply(5)
        .sin()
        .add(1)
        .currentValue();

})();

(()=>{
// index type query operator : keyof
// indexed access operator : T[K]
    function pluck0(o: any, names: string[]) {
        return names.map(n => o[n]);
    }

    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
        return names.map(n => o[n]);
    }

    interface Person {
        name: string;
        alias: string;
        age: number;
    }
    let person: Person = {
        name: 'syoh',
        alias: 'syoh',
        age: 43
    };

    let strings: string[] = pluck(person, ['name']); // ok, string[]
    let strings2: string[] = pluck(person, ['name', 'alias']); // ok, string[]
    let numbers: number[] = pluck(person, ['age']); // ok, number[]
    let mixed = pluck(person, ['name', 'age']); // ok, number[]

    let strings0: string[] = pluck0(person, ['name']); // ok, string[]
})();

(()=>{
    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
    function proxify<T>(o: T): Proxify<T> {
        let result = {} as Proxify<T>;

        for (const key in o) {
            let _value = o[key];
            result[key]= {
                get: function() {
                    console.log(`${key}.get() => ${_value}`);
                    return _value;
                },
                set: function(value:T[keyof T]) {
                    console.log(`${key}.set(${value})`);
                    _value = value;
                }
            }
        }

        return result;
    }

    let props = {
        name: 'kim',
        age: 43
    }
    let proxyProps = proxify(props);
    proxyProps.name.get();
    proxyProps.age.get();

    proxyProps.name.set('lee');
    proxyProps.age.set(42);
    //proxyProps.age.set('park');

    proxyProps.name.get();
    proxyProps.age.get();
})();

(()=>{
    // For every properties K of type T, transform it to U
    function mapObject<K extends string, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
        let result = {} as Record<K, U>;

        for (const k in obj) {
            result[k] = f(obj[k]);
        }

        return result;
    }

    const names = { foo: "hello", bar: "world", baz: "bye" };
    const lengths = mapObject(names, s => s.length);  // { foo: number, bar: number, baz: number }

    console.dir(lengths);

    const circle = { radius: 10, name: 'Circle' };
    const lengths2 = mapObject(circle, v => {
        if (typeof v === 'string') {
            return v.length;
        }
        else {
            return v * 2;
        }
    });  

    console.dir(lengths2);
})();

