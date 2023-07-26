const numbersArray = [1, 2, 3, 4, 5, "darshan", 50.5, true];

console.log("Array Length:", numbersArray.length);

for (const number of numbersArray) {
  console.log("Element : ", number);
}

numbersArray.push(6);
numbersArray.pop();
numbersArray.shift();
numbersArray.unshift(0);

const arrayAsString = numbersArray.join(", ");
console.log("Array as String:", arrayAsString);

delete numbersArray[1];
console.log("After delete:", numbersArray);

const newArray = numbersArray.concat([6, 7, 8]);
console.log("Concatenated Array:", newArray);

const flattenedArray = [[1, 2], [3, 4], [5]].flat();
console.log("Flattened Array:", flattenedArray);

numbersArray.splice(1, 1, 10, 11);
console.log("After Splice:", numbersArray);

const slicedArray = numbersArray.slice(2);
console.log("Sliced Array:", slicedArray);

const person = {
  name: "Darshan Chavda",
  age: 20,
  gender: "Male",
};

function displayPersonDetails(personObj) {
  console.log("Name:", personObj.name);
  console.log("Age:", personObj.age);
  console.log("Gender:", personObj.gender);
}

displayPersonDetails(person);
