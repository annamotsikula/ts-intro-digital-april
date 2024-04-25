var myNumber = 4;
myNumber = 7;
// var myNumber = 5;
// let & const 
// string; number; boolean; object; null; undefined
var myObject = {
    name: 'Typescript',
    version: '5.4.4'
};
var sampleString = "Sample Text";
sampleString.toLocaleLowerCase();
console.log(sampleString);
var isWinter = false;
var nothing = null;
var notAssigned;
// myObject.description
var subjects = ['Maths', 'Geography', 'History', "Physics", 7653];
function sum(a, b) {
    console.log(a + b);
}
sum(234, 5);
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["ENTRY"] = 0] = "ENTRY";
    Difficulty[Difficulty["MIDDLE"] = 1] = "MIDDLE";
    Difficulty[Difficulty["HARD"] = 2] = "HARD";
    Difficulty[Difficulty["ADVANCED"] = 3] = "ADVANCED";
})(Difficulty || (Difficulty = {}));
var Level;
(function (Level) {
    Level["ENTRY"] = "ENTRY";
    Level["MIDDLE"] = "MID";
    Level["HARD"] = "HARD";
    Level["ADVANCED"] = "ADVANCED";
})(Level || (Level = {}));
var favSubject = {
    name: 'Physics',
    grade: 98,
    difficulty: Level.ENTRY,
};
function giveBackMyValue(arg) {
    return arg;
}
;
giveBackMyValue(6);
var text = 'Sample Text';
giveBackMyValue(text);
giveBackMyValue([4, 5, 3, 73, 46, 345, 54]);
