const testpluck = (collection, key, depth) => collection.map(obj => obj[key]);

const People = [
  {
    name: "Joao",
    otherInfo: {
      age: 25
    }
  },
  {
    name: "Pedro",
    otherInfo: {
      age: 40
    }
  }
];

const test = testpluck(testpluck(People, "otherInfo"), "age");

test; // [ 25, 40 ]

const [first, second] = testpluck(testpluck(People, "otherInfo"), "age");

first; // 25
second; // 40

Array.prototype.pluck = function(key) {
  return this.map(obj => obj[key]);
};

animals = [
  { name: "Fred", species: "dog" },
  { name: "Bob", species: "dog" },
  { name: "Jimmy", species: "fish" },
  { name: "Spencer", species: "turtle" },
  { name: "Robert", species: "cat" }
];

const testanimals = animals.pluck("name");

testanimals;
