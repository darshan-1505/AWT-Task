const numbersArray = [1, 2, 3, 4, 5];

const arrayLength = numbersArray.length;
console.log("Array Length:", arrayLength);

console.log("Element at index 0:", numbersArray[0]);
console.log("Element at index 2:", numbersArray[2]);

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
  name: "John Doe",
  age: 30,
  gender: "Male",
};

function displayPersonDetails(personObj) {
  console.log("Name:", personObj.name);
  console.log("Age:", personObj.age);
  console.log("Gender:", personObj.gender);
}

displayPersonDetails(person);
