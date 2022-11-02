class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car';
    }

    getPrice() {
        return this.price;
    }

    getDescirption() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class BMW extends Car{
    constructor() {
        super();
        this.price = 1000;
        this.model = 'BMW';
    }
}

class Autopilot{
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescirption() {
        return `${this.car.getDescirption()} with autopilot`;
    }
}

class Gps{
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescirption() {
        return `${this.car.getDescirption()} with gps`;
    }
}

let teslaS90 = new Tesla();
teslaS90 = new Autopilot(teslaS90);
teslaS90 = new Gps(teslaS90);

console.log(teslaS90.getPrice(), teslaS90.getDescirption());

let teslaX30 = new Tesla();
teslaX30 = new Gps(teslaX30);

console.log(teslaX30.getPrice(), teslaX30.getDescirption());


let bmwX5 = new BMW();
bmwX5 = new Autopilot(bmwX5);

console.log(bmwX5.getPrice(), bmwX5.getDescirption());