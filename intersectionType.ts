// Intersection Type in Typescript

type UserInfo = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  role: string;
};

// Using both the Type
type CombineType = UserInfo & Employee;

// Using the Poperpty of Both types...
const employee1: CombineType = {
  name: "Hashir",
  age: 23,
  id: 39,
  role: "Frontend Developer",
};

// Log the Data
console.log(employee1);

// Intersection
type Student = {
  Name: string;
  Regno: number;
};

type EductionalDetails = {
  Field: string;
  Skills: string;
  CGPA: number;
};

type StudeInfo = Student & EductionalDetails;

const student1: StudeInfo = {
  Name: "Shayan Shah",
  Regno: 41,
  Field: "Software Engineering",
  Skills: "MernStack Developer",
  CGPA: 0.37,
};

console.log(student1); //log the data

