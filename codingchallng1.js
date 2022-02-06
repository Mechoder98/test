const mH = 1.69;

const mW = 78;

const jH = 1.95;

const jW = 92;

const mBMI = mW/mH**2;

const jBMI = jW/jH**2;

console.log("BMI of Mark is " +mBMI);
console.log("BMI of John is " +jBMI);

let markHIgherBmi = mBMI>jBMI;

console.log("Mark has higher BMI " +markHIgherBmi);