class vehicle {
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c
    } 
    honk(){
        return('Beep')
    }
    toString(){
        return `My vehicle is a ${this.make} ${this.model} from ${this.year}`
    }

}

let toy = new vehicle('toyota', '86', '1996')
console.log(toy)


class car extends vehicle{
    constructor(a,b,c){
        super(a,b,c)
        this.numWheels = 4
    }
}

let benz = new car('benz', '120z', '2020')
console.log(benz)

class motorCycle extends vehicle{
    constructor(a,b,c){
        super(a,b,c)
        this.numWheels = 2
    }
    revEngine(){
        return 'Vroom!'
    }

}
let MC = new motorCycle('harley', 'chopper', '2011')
console.log(MC.revEngine())

class garage{
    constructor(capacity){
        this.vehicles = []
        this.capactiy = capacity
    }
    add(newVehicle){
        if (!(newVehicle instanceof vehicle)){
            return 'ONLY VEHICLES ALLOWED IN THIS GARRAGE'
        } 
        if (this.vehicles.length >= this.capacity){
            return "Sorry we're full"
        }
        this.vehicles.push(newVehicle)
            return 'Vehicle added'
    }
}

let smallG = new garage('toyota', 'benz', 'mitsubishi', 'ford')
console.log(smallG)
console.log(garage.add(new car('toyota', '86', '1996')))