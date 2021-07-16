/** object **/

interface Lecture {
    topic: string
    date: number
    presenter: string
    isLive: boolean
    participants?: number
}

// type Lecture = {
//     topic: string
//     date: number
//     presenter: string
//     isLive: boolean
//     participants?: number
// }

let objectWithKnownProperties: Lecture = {
    topic: 'TypeScript',
    date: Date.now(),
    presenter: 'Me',
    isLive: true,
    participants: 5,
    // TS Error
    // place: 'online'
};

interface KeyValue {
    [key: string]: string
}

let objectWithUnknownProperties: KeyValue = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    // TS Error
    // numberKey: 1,
};
