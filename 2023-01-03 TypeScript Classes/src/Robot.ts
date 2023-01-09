export class Robot {
    private name?: string | null;
    private readonly serialNumber: string | number;

    constructor(serialNum: string | number) {
        this.serialNumber = serialNum;
        this.name = null;
    };

    start(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = "";
        for (let i = 1; i <= 2; i++) {
            result += characters.charAt(Math.floor(Math.random()*26));
        }
        for (let i = 1; i <= 3; i++){
            result += Math.floor(Math.random() * 9);
        }
        if (!this.name) {
            this.name = result;
        }        
        return this.name;
    }

    reset(): null {
        this.name = null;
        return this.name;
    }

    getName(): string {
        if (!this.name) {
            return "Je n'ai plus de nom, réinitialisation en cours !";

        } else {
            return "Mon nom est " + this.name;
        }
    }
    
    getSerialNum(): string {
        return "Mon numéro de série est " + this.serialNumber;
    }
}