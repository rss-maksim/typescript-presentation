/** array **/

const numbers: number[] = [1, 2, 3, 5, 7, 13];
const numbers2: Array<number> = [1, 2, 3, 5, 7, 13];
const numbers3: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
// TS Error
// const numbers4: number[] = Array.from({ length: 10 }, (_, index) => `${index}`);
// numbers3.push('1');


let combined: [string, number] = ['percent', 100];
combined = ['percent', 99];

// TS Error
// combined = [1, 'percent'];
