const testpluck = (collection, key) => collection.map(obj => obj[key]);

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
