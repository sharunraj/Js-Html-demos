console.log('Hello, World!');

let nameData = {firstName: 'Sharun', lastName: 'Raj'};
let personalData = {age: 22, gender: 'Male'};

let combinedData = {...nameData,...personalData};
document.write(`<h2>Hello, first name is ${combinedData.firstName} and last name is ${combinedData.lastName}!<br> ie ${combinedData.firstName} ${combinedData.lastName}<h2><br>`);
document.write(`<h2>Age: ${combinedData.age}, Gender: ${combinedData.gender}<h2><br>`);
console.log(combinedData);

// console.log(`Hello, first name is ${firstName} and last name is ${lastName}!`);
// document.write(`<h2>Hello, first name is ${firstName} and last name is ${lastName}!<br> ie ${firstName} ${lastName}<h2><br>`);

let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8, 10];
let Odd = [...oddNumbers];
let Even = evenNumbers;
let All = [...Odd,...Even];
let allNumbers = [...oddNumbers, ...evenNumbers];
document.write(`<h2>${Odd}<br>${Even}<br>${All}<br>${allNumbers}<h2>`)