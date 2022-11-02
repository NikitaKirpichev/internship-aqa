class WoodenDoor {
    getDescrpition(){
        console.log('Wooden door');
    }
}

class IronDoor {
    getDescrpition(){
        console.log('Iron door');
    }
}

class Welder{
    getDescrpition(){
        console.log('Can fit only iron doors');
    }
}

class Carpenter{
    getDescrpition(){
        console.log('Can fit only wooden doors');
    }
}

class WoodenDoorFactory{
    makeDoor(){
        return new WoodenDoor();
    }

    findFittingExpert(){
        return new Carpenter();
    }
}

class IronDoorFactory{
    makeDoor(){
        return new IronDoor();
    }

    findFittingExpert(){
        return new Welder();
    }
}

const woodenFactory = new WoodenDoorFactory();

let door = woodenFactory.makeDoor();
let expert = woodenFactory.findFittingExpert();

console.log(door.getDescrpition());
console.log(expert.getDescrpition());


const ironFactory = new IronDoorFactory();

let ironDoor = ironFactory.makeDoor();
let expertIronDoors = ironFactory.findFittingExpert();

console.log(ironDoor.getDescrpition());
console.log(expertIronDoors.getDescrpition());