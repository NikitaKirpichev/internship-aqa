class Counter{
    constructor(){
        if(typeof Counter.instance === 'object'){
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this
    }

    getCounter(){
        return this.count;
    }

    increaseCounter(){
        return this.count++;
    }
}

const count1 = new Counter;
const count2 = new Counter;

count1.increaseCounter();
count1.increaseCounter();
count1.increaseCounter();

count2.increaseCounter();
count2.increaseCounter();

console.log(count1.getCounter());
console.log(count2.getCounter());