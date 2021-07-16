/** Type assertion */

let emptyPerson = {};
// TS Error
// emptyPerson.age = 30;
// emptyPerson.name = 'John';

interface Person {
    age: number;
    name: string;
}
let person2 = {} as Person;
person2.age = 30;
person2.name = 'John';

function createPerson(name: string, age: number): Person {
    return { name, age } as Person;
}
createPerson('Bill', 31);
