const { diff } = require('jest-diff');

const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const result = diff(a, b);

// print diff, nó sẽ so sánh sự khác biệt giữa a và b
console.log(result);
/* ket qua in ra nhu sau:
- Expected
  Object {
    "a": Object {
      "b": Object {
-       "c": 5,
+       "c": 6,
      },
    },
*/
