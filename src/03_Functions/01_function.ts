function returnNothing(): void {
    console.log('If function returns nothing we specify `void` type');
}

function returnNumber(): number {
    return 100;
}

function returnString(): string {
    return 'OK';
}

function returnUndefined(): undefined {
    console.log('Return undefined');
    return;
}

function returnNull(): null {
    return null;
}

interface ReturnObjectValue {
    min: number
    max: number
}

function returnObject(array: number[]): ReturnObjectValue {
    return {
        min: Math.min(...array),
        max: Math.max(...array),
    }
}

/** ARGUMENTS AND ARROW FUNCTION **/

const sum = (a: number, b: number): number => a + b;
sum(1, 2);
// TS Error
// sum(1, '3');

/** OPTIONAL ARGUMENTS **/
function calculateWithFactor(value: number, factor?: number): number {
    if (typeof factor === 'number') {
        return value * factor;
    }
    return value;
}

/** OR USE VALUE BY DEFAULT **/
function calculateWithFactor2(value: number, factor = 1): number {
    return value * factor;
}

calculateWithFactor(100, 0.5);
calculateWithFactor(100);
// TS Error
// calculateWithFactor(100, '0.2');
calculateWithFactor2(100, 0.2);
calculateWithFactor2(100);
// TS Error
// calculateWithFactor2(100, 0.5, 0.2);


/** REST OPERATOR **/
function sumAllTheValuesExceptTheFirst(value: number, ...rest: number[]): number {
    console.log(value);
    return rest.reduce((acc, currentValue) => acc + currentValue);
}

sumAllTheValuesExceptTheFirst(1, 2, 3, 5, 8, 13);
// TS Error
// sumAllTheValuesExceptTheFirst(1, 2, 3, '5', 8, 13);

