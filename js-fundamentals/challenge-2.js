////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"


*/

// Test Data 1
const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

/*
// Test Data 2
const marksMass = 95;
const marksHeight = 1.88;

const johnsMass = 85;
const johnsHeight = 1.76;
*/

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / (johnsHeight * johnsHeight);

console.log(`Mark: ${marksMass} kg / ${marksHeight} m / ${marksBMI} BMI`);
console.log(`John: ${johnsMass} kg / ${johnsHeight} m / ${johnsBMI} BMI`);

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}