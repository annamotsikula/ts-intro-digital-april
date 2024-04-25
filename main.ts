let myNumber: number = 4;
myNumber = 7
// var myNumber = 5;
// let & const 

// string; number; boolean; object; null; undefined

let myObject = {
    name: 'Typescript',
    version: '5.4.4'
}
let sampleString: string = "Sample Text"
sampleString.toLocaleLowerCase();
console.log(sampleString);

let isWinter : boolean = false;
let nothing = null;
let notAssigned: number;

// myObject.description
const subjects: (string|number)[] = ['Maths', 'Geography', 'History', "Physics", 7653];

function sum(a: number, b: number): void {
    console.log(a + b); 
}
sum(234, 5);


interface Subject {
    name: string,
    grade: number,
    difficulty?: Level;
}

enum Difficulty {
    ENTRY,
    MIDDLE,
    HARD,
    ADVANCED
}
enum Level {
    ENTRY = "ENTRY",
    MIDDLE = "MID",
    HARD = "HARD",
    ADVANCED = "ADVANCED"
}
const favSubject: Subject = {
    name: 'Physics',
    grade: 98,
    difficulty: Level.ENTRY,
};

function giveBackMyValue<T>(arg: T): T {
    return arg
};

giveBackMyValue(6);
let text: string = 'Sample Text'
giveBackMyValue(text);
giveBackMyValue([4,5,3,73,46,345,54]);