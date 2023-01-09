class DontInit {
    private name!: string; // the property is not initialized, but with the assertion operator (here !), the compiler ignores the error
    private readonly age: number = 50; // a readonly property can only be initialized directly or in the constructor, but not modified then in a setter
    private zogzog: boolean | null;
    
    constructor(zogzog: boolean) // the curly brackets below apply to both constructors
    constructor(zogzog?: boolean) {
        this.zogzog = zogzog ?? null; // The null-coalescing operator ?? returns the value of its left-hand operand if it isn't null; otherwise, it evaluates the right-hand operand and returns its result. The ?? operator doesn't evaluate its right-hand operand if the left-hand operand evaluates to non-null.
    }

    /*THIS WILL NOT WORK !
    setAge(x: number) {
        this.age = x;
    }
    */
}