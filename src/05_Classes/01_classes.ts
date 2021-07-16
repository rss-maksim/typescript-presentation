interface AnimalProperties {
    nickname: string
    kind: string
    age: number
}

interface AnimalActions {
  makeSound: () => void
}

class Animal implements AnimalProperties, AnimalActions {
    public nickname: string;
    public kind: string;
    public age: number;
    static place = 'The Earth';

    private _internalDescription: string = 'Internal description';
    protected readonly _internalDescriptionReadOnly: string = 'Internal description which is readonly';

    constructor(nickname: string, kind: string, age: number) {
        this.nickname = nickname;
        this.kind = kind;
        this.age = age;
    }

    get internalDescription() {
        return this._internalDescription;
    }

    set internalDescription(desc: string) {
        this._internalDescription = desc;
    }

    get internalDescriptionReadOnly() {
        return this._internalDescriptionReadOnly;
    }

    set internalDescriptionReadOnly(desc: string) {
        // TS Errors
        // this._internalDescriptionReadOnly = desc;
    }

    public makeSound(): void {
    }
}

class Cat extends Animal {
    public makeSound(): void {
        console.log('Miauuu');
    }

    protected printInternalDescription() {
        console.log(this._internalDescriptionReadOnly);
        // TS Error
        // console.log(this._internalDescription);
    }
}

const cat1 = new Cat('Catty', 'domestic', 3);
const cat2 = new Cat('Kitty', 'domestic', 5);
const animal = new Animal('Catty', 'domestic', 3);
console.log(cat1);
console.log(cat2);
// TS Error
// console.log(cat2._internalDescription);
// console.log(cat2._internalDescriptionReadOnly);
