import Calculator, { add, subtract } from "./Export_modules";

console.log(add(1, 2));
console.log(subtract(5, 3));

const calc = new Calculator();
console.log(calc.add(10, 5));
