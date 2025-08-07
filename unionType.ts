// union Type in Typescript

type UserInformation = {
  name: string;
  age: number;
  email: string;
};

type AccountDetails = {
  title: string;
  experience: string[];
  batchNo: number;
};

// So here you can see the Pipe Symbol So you can use any of one Type

let USer1: UserInformation | AccountDetails = {
  title: "Project Manager",
  experience: ["Frontend Developer", "Mern Stack Developer"],
  batchNo: 345,
};

// Log the data
console.table(USer1);

// Using Union type
const items: (number | string)[] = [1, 23, 45, 67, "Shayan Shah"];
console.log(items); //Log the Data
