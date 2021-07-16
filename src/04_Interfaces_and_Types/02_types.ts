/** Types */

type NumberType = number;
type StringType = string;
type MixedType = number | string;

let mixedValue: MixedType = 10;
mixedValue = '10';

type PersonType = {
    name: string;
    age: number;
};

function greet(person: PersonType) {
    return "Hello " + person.name;
}

type AnimalType = {
    name: string
}

type BearType = AnimalType & { honey: boolean }
