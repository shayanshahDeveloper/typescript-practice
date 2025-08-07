// Object in a Typescript
const person: {
  name: string;
  age: number;
  skills: string;
  city: string;
} = {
  name: "Shayan Shah",
  age: 23,
  skills: "Frontend Developer",
  city: "Kohat",
};

console.log(person);

// Object in a Typescript

function strFunc(): { name: string; location: string } {
  return {
    name: "Haroon",
    location: "Kohat",
  };
}

console.log(strFunc());

const objData: {
  name: string;
  height: number;
} = {
  name: "Faisal",
  height: 6.4,
};

console.log(`Name:${objData.name} , Height: ${objData.height}`);
