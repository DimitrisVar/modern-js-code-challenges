////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// Test Data 1

const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

/* // Test Data 2
const marksMass = 95;
const marksHeight = 1.88;

const johnsMass = 85;
const johnsHeight = 1.76;
*/

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

const markHigherBMI = marksBMI > johnsBMI;

console.log('Mark: ' + ' ' +marksMass + ' kg' + ' / ' + marksHeight + ' m' + ' / ' + marksBMI + ' BMI');
console.log('John: ' + ' ' +johnsMass + ' kg' + ' / ' + johnsHeight + ' m' + ' / ' + johnsBMI + ' BMI');

console.log('Is Mark\'s BMI higher that John\'s? ' + markHigherBMI);