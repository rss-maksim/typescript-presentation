/** UNIONS */

let someValue: number | string | boolean = true;
someValue = 1;
someValue = '0';
someValue = 'false'
// TS Error
// someValue = {};

type Direction = 'left' | 'right' | 'up';
const direction: Direction = 'right';
// TS Error
const direction2: Direction = 'up';

/** INTERSECTIONS */

interface ActionType {
    type: string
}

interface ActionPayload {
    payload: any
}

// These interfaces are composed to have consistent error handling, and their own data.

type Action = ActionType & ActionPayload;

const action: Action = {
    type: 'UPDATE_USER',
    payload: {
        username: 'john',
        email: 'john@gmail.com'
    }
};
