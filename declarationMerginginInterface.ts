// Orignal interface

interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)

interface Car {
  model: string;
  stop(): void;
}

// Usage

const car1: Car = {
  brand: "Toyota",
  start() {
    console.log("Starting.....");
  },
  model: "B67",
  stop() {
    console.log("Stopping......");
  },
};

car1.start(); //Starting.....
car1.stop(); //Stopping......
