const { expect } = require('@jest/globals');
const isAnagram = require('./anagram');

test('isAnagram function exists',()=>{
    expect(typeof isAnagram).toEqual('function');

});

test('"thuy vi" is anagram of "vt huyi',()=>{
    expect(isAnagram('thuy vi','vt huyi')).toBeTruthy();

});

test('"thuy vi" is anagram of "thuy vi #$',()=>{
    expect(isAnagram('thuy vi','thuy vi #$')).toBeTruthy();

});

test('"thuy vi" is not anagram of "thuy mi',()=>{
    expect(isAnagram('thuy vi','thuy mi')).toBeFalsy();

});