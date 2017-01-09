console.log('---- Ex 1');
(function() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            return function (this:typeof deck) {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    try {
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();

console.log('---- Ex 2');
(function() {
    interface Deck {
        suits: string[];
        cards: any[];
        cardPicker(this:Deck): {suit:string, card:number};
    }

    let deck:Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        cardPicker: function (this:Deck) {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }

    try {
        let pickedCard = deck.cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();

console.log('---- Ex 3');
(function() {
    interface Deck {
        suits: string[];
        cards: any[];
        cardPicker(this:Deck): {suit:string, card:number};
    }

    let deck:Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        cardPicker: function (this:Deck) {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }

    try {
        let cardPicker = deck.cardPicker;
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();


console.log('---- Ex 4');
(function() {
    function createCardPicker() {
        let suits = ["hearts", "spades", "clubs", "diamonds"];
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: suits[pickedSuit], card: pickedCard % 13 };
        }
    }

    try {
        let cardPicker = createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();

console.log('---- Ex 5');
(function() {
    interface Deck {
        suits: string[];
        cards: any[];
        createCardPicker(this:Deck): () => {suit:string, card:number};
    }

    let deck:Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function (this:Deck) {
            let self = this;
            return function () {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: self.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    try {
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();

console.log('---- Ex 6');
(function() {
    interface Deck {
        suits: string[];
        cards: any[];
        createCardPicker(this:Deck): () => {suit:string, card:number};
    }

    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function (this: Deck) {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }

    try {
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();

console.log('---- Ex 7');
(function() {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52)
    }

    let createCardPicker = function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: deck.suits[pickedSuit], card: pickedCard % 13 };
        }
    }

    try {
        let cardPicker = createCardPicker();
        let pickedCard = cardPicker();

        console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    }
    catch(e) { console.log('DEAD'); }
})();


