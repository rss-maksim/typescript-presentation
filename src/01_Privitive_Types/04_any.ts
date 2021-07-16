/** ANY **/

/** IMPORTANT!
    It's not recommended to use the type any (only in except situations)
*/

let value: number = 100;
// TS Error
// value = '1';

let anotherValue: any = 100;
anotherValue = '1';

// const object3: any = {};
//
// object3.test = 1;
