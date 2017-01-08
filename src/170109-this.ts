class Handler {
    constructor(private name: string) {

    }
    callme() {
        console.log(`${this.name} called`);
    }
    makeBindedCallMe() {
        return this.callme.bind(this);
    }
}

let timerHandler = new Handler('timer handler');

// 1. 
timerHandler.callme();

// 2. 
setTimeout(timerHandler.callme, 1000);

// 3. 
let bindedTimerHandler = timerHandler.callme.bind(timerHandler);
setTimeout(bindedTimerHandler, 2000);

// 4. 
setTimeout(timerHandler.makeBindedCallMe(), 3000);

// 5. 
setTimeout(function() {timerHandler.callme()}, 4000);

// 6.
setTimeout(() => {timerHandler.callme()}, 5000);
