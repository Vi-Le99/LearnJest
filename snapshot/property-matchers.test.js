/* se luon fail khi yarn test 
it('will fail every time', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'LeBron James',
    };

    expect(user).toMatchInlineSnapshot(`
Object {
  "createdAt": 2021-06-22T03:38:25.280Z,
  "id": 14,
  "name": "LeBron James",
}
`);
});
*/

it('will check the matchers and pass', () => {
    Date.now = jest.fn(() => 148233367071);
    const user = {
        //createdAt: new Date(),
        createdAt: Date.now(),// giả lập Date.now để tạo 1 giá trị nhất quán cho mỗi lần run test
        id: Math.floor(Math.random() * 20),
        name: 'LeBron James',
    };

    expect(user).toMatchInlineSnapshot({
  //   createdAt: expect.any(Date),
  id: expect.any(Number) }, `
Object {
  "createdAt": 148233367071,
  "id": Any<Number>,
  "name": "LeBron James",
}
`);
});

