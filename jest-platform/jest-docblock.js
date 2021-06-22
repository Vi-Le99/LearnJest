const { parseWithComments } = require('jest-docblock');

const code = `
/**
 * Hi, my name is Vi. This is example for jest-docblock
 *
 * !@#$%^&*()_+Ơ}|:"<>?
 * 
 * @flow
 */

 console.log('Hello World!');
`;

// parsed: thực hiện phân tích cú pháp của const code, set comment thành 1 object
const parsed = parseWithComments(code);
console.log(parsed);
/* xuat ra nhu duoi:
{
  comments: '/**\n' +
    'Hi, my name is Vi. This is example for jest-docblock\n' +
    '\n' +
    '!@#$%^&*()_+Ơ}|:"<>?\n' +
    '\n' +
    '/\n' +
    '\n' +
    " console.log('Hello World!');",
  pragmas: [Object: null prototype] { flow: '' }
}
*/
// khó hiểu chỗ pramas
 //xem them o trang https://github.com/facebook/jest/blob/master/packages/jest-docblock/README.md