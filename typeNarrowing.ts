type MyType = string | number;

function exampleFunc(value: MyType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

exampleFunc("shayan shah"); //SHAYAN SHAH
exampleFunc(25); //25.00 Fixed By Adding to Extra Zero at the End
