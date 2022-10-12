class Subscriber{

    constructor(number) {
        console.log("Ik word aangemaakt met: " + number);
        this.number = number;
        this.observers = [];
        console.log("Mijn this.number is nu " + this.getState());
    }
    updateState(newState){
        console.log("mijn nummer is nu: " + this.getState())
        this.number = newState
        console.log("ik update mijn nummer");
        console.log("mijn nummer is nu: " + this.getState())
        this.notify();
    }
    getState(){
        return this.number;
    }

    notify(){
        console.log("Informing my childs");
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].update();
        }
    }
    
    attach(observer){
        this.observers.push(observer);
    }
}

class Observer{
    constructor(name, subscriber){
        this.name = name;
        this.subscriber = subscriber;
        this.init();
    }
    init(){
        console.log("Hallo ik ben observer " + this.name + "en de state van mijn sub is nu: " + this.subscriber.getState());
    }
    update(){
        console.log("Hallo ik ben observer " + this.name + "en de state van mijn sub is nu: " + this.subscriber.getState());
    }
}

let subscriber__1 = new Subscriber(2);


let observer__1= new Observer("Observer 1", subscriber__1);
subscriber__1.attach(observer__1);


let observer__2 = new Observer("Observer 2", subscriber__1);
subscriber__1.attach(observer__2);

subscriber__1.updateState(100);