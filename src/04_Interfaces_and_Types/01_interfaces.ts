/**
 * Interfaces are object types.
 * Interfaces are extendable.
 * */

interface PersonInterface {
    name: string;
    age: number;
}

const me: PersonInterface = {
    name: 'me',
    age: 30,
    // TS Error
    // role: 'GUEST'
};

interface UserInterface extends PersonInterface {
    role: string
}

const user: UserInterface = {
    name: 'username',
    age: 30,
    role: 'GUEST'
}

function greetPerson(user: UserInterface): string {
    return "Hello " + user.name;
}
