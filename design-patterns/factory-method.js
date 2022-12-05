class Bmw{
    constructor(model, price, maxSpeed){
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory{
    create(model){
        if (model === 'X5'){
            return new Bmw(model, '25.000$', 250);
        }

        if (model === 'M5'){
            return new Bmw(model, '100.000$', 300);
        }
    }
}

const factory = new BmwFactory();

const m5 = factory.create('M5');
const x5 = factory.create('X5');

console.log(m5);
console.log(x5);