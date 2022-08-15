//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    loadPassenger(nun) {
        if (this.passenger < this.maximumPassengers) {
            console.log('more people fit')
        } else {
            console.log('no more people fit')
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log('engine has started')
            return this.started = true
        } else {
            console.log('no fuel')
            return this.started = false
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService == true
            return this.scheduleService
        }
    }
}

