// __tests__/timerGame-test.js
'use strict';
const { expect } = require('@jest/globals');

jest.useFakeTimers();

test('waits 1 second before ending the game', () => {
  const timerGame = require('./timerGame');
  timerGame(10);
    console.log(setTimeout);
    //expect(setTimeout).toHaveBeenCalled();
  //expect(setTimeout).toHaveBeenCalledTimes(1);
  //expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});