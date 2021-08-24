// let and const
const hubby = 'omor sani';
let phone = 'nokia';
phone = 'xiomi';
// 2.default parameter

// 5.spread opretor
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max
}
const biggest = maxNumber();
console.log(biggest);



// 3.templete string
const myNotes = `i am mojnu ${hubby}. i have a ${phone}`;
console.log(myNotes);
// 4.arrow function
const square = x => x * x;
console.log(square(8))