// Classes In typescript

class PersonDetails {
  newName: string;
  newAge: number;
  constructor(newName: string, newAge: number) {
    this.newName = newName;
    this.newAge = newAge;
  }
}

const personInfo = new PersonDetails("Shayan Shah", 23);
console.log(personInfo);
