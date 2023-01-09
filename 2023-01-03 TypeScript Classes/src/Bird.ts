export class Bird {
    // present class parameters
    private _race: string;
    private _weight: number;
    private _plumage: string[];
    private _span: number;
    private _canFly: boolean;

    // initialise class parameters with a constructor
    /*public*/ constructor(race: string, weight: number, plumage: string[], span: number, canFly: boolean) { // if we don't indicate public, typescript considers it as public
        this._race = race;
        this._weight = weight;
        this._plumage = plumage;
        this._span = span;
        this._canFly = canFly
    }

    set race(value: string) {
        this._race = value;
    }
    set weight(value: number) {
        this._weight = value;
    }
    set plumage(value: string[]) {
        this._plumage = value;
    }
    set span(value: number) {
        this._span = value;
    }
    set canFly(value: boolean) {
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