// Access Modifier in Typescript

class Human {
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

const p1 = new Human("Shayan Shah", "test@gmail.com", 23);
console.log(p1);
