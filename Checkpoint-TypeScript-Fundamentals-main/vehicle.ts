// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Step 2: Implement the Car class that implements Vehicle
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Step 3: Create an instance of Car and test
const myCar = new Car("Toyota", "Camry", 2023);
myCar.start(); // Output: Car engine started
