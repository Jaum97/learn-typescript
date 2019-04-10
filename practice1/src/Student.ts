class Person {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

class Student extends Person {
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
    public course = ""
  ) {
    super(firstName, middleInitial, lastName);
  }
}

const test = new Student("João", "M", "Medeiros", "Computer Science");

test;

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");

if (greeter(user2) !== "Hello, Jane User") {
  throw Error("Happy path failed");
}

if (user2.course !== "") {
  throw Error("Course property failed");
}

console.log(greeter(user2));
