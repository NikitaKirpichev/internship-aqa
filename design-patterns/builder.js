class Car{
    constructor(){
        this.gps = false;
        this.airbag = false;
        this.airСonditioning = false;
    }
}

class CarBuilder{
    constructor(){
        this.car = new Car();
    }

    addGps(gps){
        this.car.gps = gps;
        return this;
    }

    addAirbag(airbag){
        this.car.airbag = airbag;
        return this;
    }

    addAirСonditioning(airСonditioning){
        this.car.airСonditioning = airСonditioning;
        return this;
    }

    updateEngine(engine){
        this.car.engine = engine;
        return this;
    }

    build(){
        return this.car;
    }  
}

const bmw = new CarBuilder()
                            .addGps(true)
                            .addAirbag(true)
                            .addAirСonditioning(true)
                            .updateEngine('V8 350hp')
                            .build();
console.log(bmw);

const volvo = new CarBuilder()                            
                            .addGps(true)
                            .addAirbag(false)
                            .addAirСonditioning(false)
                            .updateEngine('4R 150hp')
                            .build();
console.log(volvo);
