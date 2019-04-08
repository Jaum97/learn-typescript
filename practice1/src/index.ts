const { log: l } = console;
interface Person {
  firstName: string;
  lastName: string;
}

function greeter({ firstName, lastName }: Person) {
  return "Hello, " + firstName + " " + lastName;
}

let user = { firstName: "Jane", lastName: "User" };

if (greeter(user) !== "Hello, Jane User") {
  throw Error("Happy path failed");
}
