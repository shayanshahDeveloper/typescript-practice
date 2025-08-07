// Generics in typescript

function greetDifferent<T>(name: T, age: T): [T, T] {
  return [name, age];
}

const res = greetDifferent<string>("Hello", "Mern stack");
console.log(res);

// Generics
function normalGenr<T>(item: T, defaultvalue: T): [T, T] {
  return [item, defaultvalue];
}

const strNormal = normalGenr<String>("Hey", "Shayan");
const bolNormal = normalGenr<boolean>(true, false);
const numNormal = normalGenr<number>(23, 45);

// Log the Data
console.log(strNormal);
console.log(bolNormal);
console.log(numNormal);

// Using Gnerics in Interface

interface DogBreed {
  name: string;
  breed: string;
}

// Using Gernics
const dog1 = normalGenr<DogBreed>(
  { name: "Labra", breed: "German" },
  { name: "Fox", breed: "Danger" }
);

// Log the Data
console.table(dog1);

// Another Generic Exampleof Interface

function musicCall<T>(name: T, singer: T): [T, T] {
  return [name, singer];
}

interface MusicBundle {
  name: string;
  singerName: string;
}

// using this interface in Genercis

const music1 = musicCall<MusicBundle>(
  {
    name: "Afreen",
    singerName: "Atif Aslam",
  },
  { name: "Sanam teri Kasam", singerName: "Unknown" }
);

console.table(music1);

// Filter array using Generics
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 23, 43, 4, 5, 6, 7, 8, 9, 10];
const evenArray = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenArray);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "Apple", color: "Red" },
  { name: "Orange", color: "Orange" },
  { name: "Cherry", color: "Red" },
  { name: "Strawberry", color: "Red" },
  { name: "Bannana", color: "Yellow" },
];

const fruitfilter = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);

console.log(fruitfilter);
console.table(fruitfilter);

// Creating the Same Generics Function

function movieArray<T>(array: T[], condition: (item: T) => boolean) {
  return array.filter((item) => condition(item));
}

// Craeting Inertface

interface MovieHub {
  name: string;
  rating: number;
}

const MoviearrayList: MovieHub[] = [
  { name: "Iron Man", rating: 8 },
  { name: "Bat Man", rating: 5 },
  { name: "Spider Man", rating: 9 },
  { name: "Balck Panther", rating: 9 },
  { name: "Super Man", rating: 9 },
  { name: "Thor", rating: 8 },
];

const movie1 = movieArray<MovieHub>(
  MoviearrayList,
  (rating) => rating.rating === 9
);

// Log the Data
console.log(movie1);
console.table(movie1);

// Mutiple Type in Generics

const arrowfunc = <T, U>(value: T, value2: U): [U, T] => {
  return [value2, value];
};

// give The reverse Pair

const reversePair = arrowfunc("Hello", 23);
console.log(reversePair); // 23, Hello give the reverse order in output
