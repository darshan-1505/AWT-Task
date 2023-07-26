let myVariable = 10;
const myConstant = 20;

const add = (a, b) => a + b;

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log(myMap.get("key1"));

const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const darshan = new Person("Darshan", 20);
darshan.greet();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const mySymbol = Symbol("mySymbol");
console.log(typeof mySymbol);

const greetPerson = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greetPerson();
greetPerson("Darshan");

const sumNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumNumbers(1, 2, 3));
