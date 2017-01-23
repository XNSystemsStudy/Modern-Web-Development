(()=>{
    class MyArray0 {
    }
    class MyArray {
        static [Symbol.hasInstance](instance: any) {
            return Array.isArray(instance);
        }
    }
    console.log([] instanceof MyArray0); // false
    console.log([] instanceof MyArray); // true

})();