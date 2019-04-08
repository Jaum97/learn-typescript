const { log: l } = console;
interface Person {
  firstName: string;
  lastName: string;
}

let user = { firstName: "Jane", lastName: "User" };

if (greeter(user) !== "Hello, Jane User") {
  throw Error("Happy path failed");
}
