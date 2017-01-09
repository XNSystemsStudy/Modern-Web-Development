(function() {
    class Handler {
        info: string;
        constructor(private name: string) { }
        onClickBad(this: Handler, e: MouseEvent) {
            console.log(`name is ${this.name}`);
            this.info = e.type;
        };
    }

    let h = new Handler('my Handler');

    let div = document.getElementById('target');
    div.addEventListener("click", h.onClickBad);
})();

(function() {
    class Handler {
        info: string;
        constructor(private name: string) { }
        onClickBad(this: Handler, e: MouseEvent) {
            console.log(`name is ${this.name}`);
            this.info = e.type;
        };
        onClickGood(this: void, e: MouseEvent) {
        };
    }

    let h = new Handler('my Handler');

    h.onClickBad(new MouseEvent("click"));

    interface UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void;
    }
    class El implements UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void {

        }
    }
    let uiElement = new El();
    uiElement.addClickListener(h.onClickBad);
    uiElement.addClickListener(h.onClickGood);
})();

(function() {
    class Handler {
        info: string;
        constructor(private name: string) { }
        // is not prototype
        onClickGood = (e: MouseEvent) => {
            console.log(`name is ${this.name}`);
            this.info = e.type;
        };
    }

    let h = new Handler('my Handler');

    interface UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void;
    }
    class El implements UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void {

        }
    }
    let uiElement = new El();
    uiElement.addClickListener(h.onClickGood);
})();