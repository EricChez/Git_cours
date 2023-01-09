export class Robot {
    constructor(serialNum) {
        this.serialNumber = serialNum;
        this.name = null;
    }
    ;
    start() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = "";
        for (let i = 1; i <= 2; i++) {
            result += characters.charAt(Math.floor(Math.random() * 26));
        }
        for (let i = 1; i <= 3; i++) {
            result += Math.floor(Math.random() * 9);
        }
        if (!this.name) {
            this.name = result;
        }
        return this.name;
    }
    reset() {
        this.name = null;
        return this.name;
    }
    getName() {
        if (!this.name) {
            return "Je n'ai plus de nom, réinitialisation en cours !";
        }
        else {
            return "Mon nom est " + this.name;
        }
    }
    getSerialNum() {
        return "Mon numéro de série est " + this.serialNumber;
    }
}
