const { getType } = require('jest-get-type');

const array_A = [1, 2, 3]; //type của biến array_A là 1 mảng
const nullValue = null;
const undefinedValue = undefined;
const num=8;
const str="hello";

// get the type of variables
console.log(getType(array_A));
console.log(getType(nullValue));
console.log(getType(undefinedValue));
console.log(getType(num));
console.log(getType(str));
/* in ra như dưới:
array
null
undefined
number
string
*/