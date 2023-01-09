"use strict";
class DontInit {
    constructor(zogzog) {
        this.age = 50; // a readonly property can only be initialized directly or in the constructor, but not modified then in a setter
        this.zogzog = zogzog !== null && zogzog !== void 0 ? zogzog : null; // The null-coalescing operator ?? returns the value of its left-hand operand if it isn't null; otherwise, it evaluates the right-hand operand and returns its result. The ?? operator doesn't evaluate its right-hand operand if the left-hand operand evaluates to non-null.
    }
}
