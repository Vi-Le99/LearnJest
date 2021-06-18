// test.js
jest.mock('./foo'); // this happens automatically with automocking
const foo = require('./foo');

test('Foo - mock implements', () => {
    foo.mockImplementation(() => 42);
    expect(foo()).toBe(42);
    // > 42
});
