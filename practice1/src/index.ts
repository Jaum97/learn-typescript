const { log: l } = console;

function greeter(person: string) {
    return typeof(person)==='string' 
    ? "Hello, " + person
    : new TypeError(`Expected String, received: ${person}`) 
}

const user = "Jane User";
const user2 = 3;
const user3 = [0,1,2];

l(greeter(user));
l(greeter(user2));
l(typeof(greeter(user3));
l(greeter());



if(greeter('Jane User') !== 'Hello, Jane User'){
    throw new Error('Happy path failed')
}

if(!greeter(3) instanceof TypeError){
    throw new Error('Type check failed')   
}




