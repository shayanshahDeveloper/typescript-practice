// Custom Type in Typescript.....

// Defining the Type
type Person = {
  name: string;
  email: string;
  phone: number;
  country: string;
};

// Using The type in a parameter as Inference
const gettingData = (person: Person) => {
  return `Name: ${person.name}, Email: ${person.email}, Phone: ${person.phone}, Country: ${person.country}`;
};

// Passing the Data
const resOuput = gettingData({
  name: "Shayan Shah",
  email: "test@gmail.com",
  phone: 923043434,
  country: "Pakistan",
});

// Logging the Data to the Ouput
console.log(resOuput); // Output=> Name: Shayan Shah, Email: test@gmail.com, Phone: 923043434, Country: Pakistan

// Let's try the otional property in typescript

type User = {
  firstName: string;
  email: string;
  phone?: string; //The Question mark shows the optional that use this property or either not depan on you
};

const userInfo: User = {
  firstName: "Faheem Shah",
  email: "test@gmail.com",
};

console.log(userInfo);

// Readonly Property

type Read = {
  name: string;
  age: number;
  readonly location: string;
};

const read: Read = {
  name: "Hammad",
  age: 34,
  location: "Pakistan",
};

// You can not change the Readonly 
read.location='Something Else' //See its through the Error 
