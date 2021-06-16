const { expect } = require('@jest/globals');
const reverseString = require('./reversestring');

//challenge for test: https://github.com/bradtraversy/javascript_cardio
//video: https://www.youtube.com/watch?v=7r4xVDI2vho
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses',()=>{
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase',()=>{
    expect(reverseString('Hello')).toEqual('olleh');
});
