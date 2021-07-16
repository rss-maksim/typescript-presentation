/** Enums */

/** Numeric enums */
enum NumberDirection {
    Up = 1,
    Down,
    Left,
    Right,
}

const upDirection = NumberDirection.Up;
console.log('Numeric enum: ', upDirection);

/** String enums */
enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

const downDirection = StringDirection.Down;
console.log('String enum: ', downDirection);

/** Heterogeneous enums */
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

interface Pointer {
    direction: StringDirection
}

const pointer: Pointer = {
    direction: StringDirection.Up
};
console.log('pointer: ', pointer);
