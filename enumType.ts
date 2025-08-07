// Enum Type in Typescript

//Creating Enum

enum WeatherConditionS {
  Sunny = "sunny",
  Cloundy = "cloudy",
  Rainy = "rainy",
}

// Usage of Enum

const weather = WeatherConditionS.Cloundy;
console.log(`Today Weather is ${weather}`);

// Another Example
enum Skills {
  Frontend = "frontend Developer",
  Mern = "mern stack Developer",
  Full = "fullstack Developer",
}


const employe = Skills.Mern;
console.log(`Fisal Shah is ${employe}`)