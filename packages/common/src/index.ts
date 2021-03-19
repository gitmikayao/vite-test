const common = {
    add: (a: number, b: number) => {
        return a + b;
    }
};

class Test {
    constructor() {

    }

    public add(a: number, b: number) {
        return a + b;
    }
}

export { common, Test };