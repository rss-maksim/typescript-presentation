/** Generics */

function loggingIdentity<T>(...args: T[]): T[] {
    console.log('length', args.length);
    return args;
}

loggingIdentity<number>(1, 2, 3, 5, 8);
loggingIdentity<string>('1', '2', '3', '5', '8', '13');

class GenericNumber<NumType> {
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

console.log(myGenericNumber);
