// Interface in Typescript

// Creating Interface

interface Computer {
  name: string;
  ram: number;
  ssd: number;
  hdd?: number;
}

const computerExmaple: Computer = {
  name: "Core i5",
  ram: 8,
  ssd: 256,
  // I add the ? Question marrk on last Property which is Optional
  //   You all use the optional Property
  hdd: 128,
};

// Log the Data
console.table(computerExmaple);

// Using interface in fuction

interface MathOperation {
  (x: number, y: number): number;
}

// Usage of Function Interface
const sum: MathOperation = (a, b) => a + b;
console.log(sum(2, 2));

const sub: MathOperation = (a, b) => a - b;
console.log(sub(8, 4));

const mult: MathOperation = (a, b) => a * b;
console.log(mult(3, 3));

const divide: MathOperation = (a, b) => a / b;
console.log(divide(20, 2));

// function

interface PersonInformation {
  name: string;
  age: number;
  sayHello(): void;
}

// using the inertface in regular function
function greetHello(person: PersonInformation) {
  console.log(`Hello ${person.name} , age: ${person.age}`);
  person.sayHello();
}

const shayan: PersonInformation = {
  name: "Shayan Shah",
  age: 23,
  sayHello() {
    console.log("Hello from inner function");
  },
};

// calling the Function
greetHello(shayan);

const haris: PersonInformation = {
  name: "Haris Shah",
  age: 25,
  sayHello() {
    console.log("Hello from inner function2");
  },
};

// Caling the function
greetHello(haris);

// inertface

interface SongAlbum {
  songname: string;
  singername: string;
  ratings: number;
  realaseData?: number;
}

const song1: SongAlbum = {
  songname: "Jadu Jadu",
  singername: "Atif Aslam",
  ratings: 9,
  realaseData: 2024,
};

console.table(song1);

// Extending Interface from another Interface

interface MovieDetails {
  name: string;
  ratings: number;
  printMovieInfo(name: string, ratings: number, price: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movieFirst: MovieGenre = {
  name: "Spider Man",
  ratings: 8,
  genre: "Action",
  printMovieInfo(
    name: string,
    ratings: number,
    price: number
  ): string | number {
    return `Movie Name: ${name} Movie ratings: ${ratings} Genre: ${this.genre}`;
  },
};

console.log(movieFirst.printMovieInfo("Hero", 7, 457));
