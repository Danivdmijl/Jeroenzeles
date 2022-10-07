class Subscriber{

    constructor(name) {
        this.name = name;
    }
    init() {
        console.log("Fakka niffo's");    
    }
}

let x = new Subscriber("Jeroen");
let y = new Subscriber("Erik");
console.log(x.name);
console.log(y.name);