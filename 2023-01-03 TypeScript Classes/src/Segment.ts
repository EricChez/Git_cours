export class Segment {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number);
    constructor(x: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

}