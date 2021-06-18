const { expect } = require('@jest/globals');
const functions = require('./functions');


// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());


// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');



test('3 + 5 = 8', ()=>{
    expect(functions.add(3,5)).toBe(8); //cach 1: goi ham o file khac
});

// test('3 + 5 != 7', ()=>{
//     expect(functions.add(3,5)).not.toBe(7);
// });
// test('Should be null ', ()=>{
//     expect(functions.isNull()).toBeNull();
// });

// test('null', () => {
//   const n = null; //cach 2: tao 1 bien ben trong
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined(); //=.toBeDefined();
//     expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy(); //null dc xem menh de sai
// });

// test('null', () => {
// const n = null; //cach 2: tao 1 bien ben trong
// neu k co const n se bi loi khi chi thuc hien dong tobeUndefined;
//     //expect(n).toBeUndefined();//n=null, dong nay se bi fail
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined(); //=.toBeDefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy(); //n tinh la menh de sai
// });

// test('z = 0', () => {
//   const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy(); //z la menh de sai
// });


// test('so sanh (2+2)', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });

// test('0.1 + 0.2 = 0.3', () => {
//   const value = 0.1 + 0.2;
//   // expect(value).toBe(0.3);          //bi loi lam tron,  Expected: 0.3,  Received: 0.30000000000000004
//   // expect(value).toEqual(0.3);      // bi loi giong dong tren
//   expect(value).toBeCloseTo(0.3);     //cai nay pass dc
// });

// test('user={"Vi","Le"}', () => {
//   //expect(functions.createUser()).toBe({ firstName: 'Vi', lastName: 'Le' }); toBe khong xai cho mang dc
//   expect(functions.createUser()).toEqual({ firstName: 'Ami', lastName: 'Le' });
// });

// test('gia tri lily nam trong mang', () => {
//   username = { name: 'Vi', nickname: 'lily' };
//   //expect(username).toContain('lily');//bi loi
//   //expect(username).toContain('nickname');//error
//   //expect(username).toContain({ name:'Vi', nickname: 'lily'});//error
//   expect(username).toEqual({ name: 'Vi', nickname: 'lily' });//pass
//   student = ['Vi', 'lily', 'ami', 'yumi'];
//   expect(student).toContain('lily');

// });
// test('trong chu team co chu I khong', () => {
//   expect('team').not.toMatch(/I/);
//   expect('teamI').toMatch(/I/);
//   //expect('teami').toMatch(/I/);// error vi co phan biet chu hoa, thuong a
// });

// test('trong chu Christoph co string stop khong', () => {
//   expect('Christoph').toMatch(/stop/);
// });


// function testException() {
//   throw new Error('you are using the wrong JDK');
// }

// test('testException', () => {
//   expect(() => testException()).toThrow();//kt ham co throw phai k
//   expect(() => testException()).toThrow(Error);
//   expect(() => testException()).toThrow('you are using the wrong JDK');
//   expect(() => testException()).toThrow(/JDK/);
// });


//--------Promise
// test('user fetched name = LEanne Graham',() => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   })
// }); //pass



// test('user fetched name = LEanne Graham',() => {
//   expect.assertions(0);
//   functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   })
// }); //pass


// test('user fetched name = LEanne Graham',() => {

//   functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham1');
//   })
// }); //pass

//--------Async await
test('user fetched name = LEanne Graham', async () => {
  //expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
}); //pass


// describe('A', () => {
//   console.log('-------A.1');

//   describe('block describe A.1', () => {
//     console.log('print describe A.1');
//     test('test A.1 in block describe', () => {
//       console.log('print test A.1 in block describe');
//       expect(true).toEqual(true);
//     });
//   });

//   console.log('-------A.2');

//   test('test A.2', () => {
//     console.log('print test A.2');
//     expect(true).toEqual(true);

//   });

//   describe('block describe A.2', () => {
//     console.log('print describe A.2');
//     test('test A.2 in block describe', () => {
//       console.log('print test A.1 in block describe');
//       expect(false).toEqual(false);
//     });
//   });

//   console.log('------A.3');
// });

// --------A.1
// print describe A.1
//  -------A.2
// print describe A.2
// ------A.3
//sau khi thuc hien describe xong truoc khi thuc thi test
// print test A.1 in block describe
// print test A.2
// print test A.2












