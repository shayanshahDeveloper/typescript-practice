// Access Modifier in Typescript

class HumanInfo {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return `Name: ${this.name} Email: ${this.email} Age: ${this.age}`;
  }
}

const person1 = new HumanInfo("Shayan Shah", "test@gmail.com", 23);
console.log(person1);

// Using the Acces Modifier

class PersonDetailsHuman {
  name: string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return `Name: ${this.name} Email: ${this.email} Age: ${this.age}`;
  }
}

const perosn2 = new PersonDetailsHuman("Fasial", "test@gmail.com", 23);
