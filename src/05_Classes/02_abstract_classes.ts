abstract class Vehicle {
    constructor(public brand: string, public wheels: number, public engine: string) {
    }

    make() {
        console.log('Vehicle is made: ', this.brand, this.wheels, this.engine);
    }

    abstract startEngine(): void
}

class Bus extends Vehicle {
    constructor(public model: string, public brand: string, public wheels: number, public engine: string) {
        super(brand, wheels, engine);
    }

    startEngine() {
        console.log('Starting the bus\' engine', this.brand, this.model);
    }

    drive() {
        console.log('Driving the bus', this.brand);
    }
}

class Plane extends Vehicle {
    constructor(public model: string, public brand: string, public wheels: number, public engine: string) {
        super(brand, wheels, engine);
    }

    startEngine() {
        console.log('Starting the plane\'s engine', this.brand, this.model);
    }

    fly() {
        console.log('Driving the car', this.brand);
    }
}

// TS Error
// const abstractVehicle: Vehicle = new Vehicle('test', 0, 'test');

const bus = new Bus('Solaris', 'A364', 8, 'i638');
bus.make();
bus.startEngine();
bus.drive();

const plane = new Plane('Boing', '737', 6, 'e737');
plane.make();
plane.startEngine();
plane.fly();
