export class Bird {
    // initialise class parameters with a constructor
    /*public*/ constructor(race, weight, plumage, span, canFly) {
        this._race = race;
        this._weight = weight;
        this._plumage = plumage;
        this._span = span;
        this._canFly = canFly;
    }
    set race(value) {
        this._race = value;
    }
    set weight(value) {
        this._weight = value;
    }
    set plumage(value) {
        this._plumage = value;
    }
    set span(value) {
        this._span = value;
    }
    set canFly(value) {
        this._canFly = value;
    }
    // in main.ts, both getters and setters will be identified as what they are depending on the code
    get race() {
        return this._race;
    }
    get weight() {
        return this._weight;
    }
    get plumage() {
        return this._plumage;
    }
    get span() {
        return this._span;
    }
    get canFly() {
        return this._canFly;
    }
}
