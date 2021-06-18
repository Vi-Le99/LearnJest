const { TestWatcher } = require("jest");

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('example a mock function', () => {
    const funcA = jest.fn(x => 42 + x);
    //const mockCallback=jest.
    forEach([3, 5], funcA);

    // The mock function is called twice
    expect(funcA.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(funcA.mock.calls[0][0]).toBe(3);

    console.log(funcA.mock.calls[0][0]);
    console.log(funcA.mock.calls[0]);
    // The first argument of the second call to the function was 1
    expect(funcA.mock.calls[1][0]).toBe(5);

    // The return value of the first call to the function was 42
    expect(funcA.mock.results[0].value).toBe(45);
    console.log(funcA.mock.results[0].value);

});

test('example 1 .mock property', () => {
    const myMock = jest.fn();

    const a = new myMock();
    //ex1 
    a.name = "a";//thuoc tinh
    const b = {};
    b.name = "b"; //thuoc tinh
    b.id = "3"; //th tinh
    // log ra kq: [ mockConstructor { name: 'a' }, { name: 'b', id: '3' } ]

    //ex2
    // const b="hello";
    //log ra kq:   [ mockConstructor { name: 'a' }, 'hello' ]

    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);

    // > [ <a>, <b> ]
});

test('example 2 .mock property', () => {
    const someMockFunction = jest.fn(() => 'return value');
    const a = new someMockFunction('first arg', 'second arg');

    //console.log(someMockFunction.mock.instances); ham nay chi ra kq khi ta khoi tao,vd const a=someMockFunction(......gi do)

    expect(someMockFunction.mock.calls.length).toBe(1);
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg');
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');
    expect(someMockFunction.mock.results[0].value).toBe('return value');

    const b = new someMockFunction('first arg', 'second arg');
    // someMockFunction('first arg', 'secon arg');//cai nay van tinh la 1 instance
    a.name = 'test';

    expect(someMockFunction.mock.instances.length).toBe(2); //mock.call.length cung giong het mock.instance.length
    expect(someMockFunction.mock.instances[0].name).toEqual('test');
});

test('mock return value once', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    /*
    mockReturnValue(true): nghia la dat default value=true, va return gia tri value nay
    mockReturnValueOnce(10): nghia la return gia tri 10 1 lan
    in ra gia tri mockReturnValueOnce truoc roi moi in ra mockReturnValue (du dat mockReturnValue o truoc)

    */

    // myMock.mockReturnValue(true).mockReturnValueOnce(10).mockReturnValueOnce('x');
    // myMock.mockReturnValue(false).mockReturnValueOnce(3).mockReturnValueOnce('t');
    // console.log(myMock(), myMock(), myMock(), myMock(),myMock(), myMock(), myMock(), myMock());
    // //(in ra)> 10 x 3 t false false false false

    // myMock.mockReturnValue(true).mockReturnValueOnce(10).mockReturnValueOnce('x');
    // console.log(myMock(), myMock(), myMock(), myMock()); //10 x true true

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x');
    console.log(myMock(), myMock(), myMock(), myMock()); //10 x undefined undefined

});

test('filter Test', () => {
    const filterTestFn = jest.fn();

    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));// cach 1> [11], 11, undefine, [ [ 11 ], [ 12 ] ]
    //const result = [11, 12].filter(filterTestFn);// cach 2 > [11], 11, 0, [ [ 11, 0, [ 11, 12 ] ], [ 12, 1, [ 11, 12 ] ] ]

    // trong mang [11,12], filterTestFn return gia tri value dau tien la true nen phan tu dau tien cua mang la 11 duoc giu lai
    // filterTestFn return gia tri value thu 2 la false nen phan tu thu 2 cua mang la 12 bi remove

    console.log(result);
    // > [11]
    console.log("----------------");
    console.log(filterTestFn.mock.calls[0][0]);
    console.log("----------------");
    console.log(filterTestFn.mock.calls[0][1]);
    console.log("----------------");
    console.log(filterTestFn.mock.calls);

});

test('mock implementation', () => {
    const myMockFn = jest.fn(cb => cb(null, true));

    myMockFn((err, val) => console.log(val));
    // gia tri err se gan=null va val se gan =true
    // > true
})

test('mockImplementationOnce 1 ', () => {
    const myMockFn = jest
        .fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));

    myMockFn((err, val) => console.log(val));
    // > true
    myMockFn((err, val) => console.log(val));
    // > false
});

test('mockImplementationOnce 2', () => {
    const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    // > 'first call', 'second call', 'default', 'default'
});

test('return this', () => {
    const myObj = {
        myMethod: jest.fn().mockReturnThis(),
    };

    // is the same as

    const otherObj = {
        myMethod: jest.fn(function () {
            return this;
        }),
    };

    console.log(myObj.myMethod);//van chay dc
    console.log(otherObj.myMethod());
});

test.only('mock name', () => {
    const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');
    //    const a=new myMockFn();
    expect(myMockFn).toHaveBeenCalled();
    //    expect('add42').toHaveBeenCalled(); //error, mock name k dung kieu nay dc
    //  gia su k co dong const a, thi no se bao error, luc nay trong loi error, no se bao nhu sau:
    /*  expect(add42).toHaveBeenCalled()
        Expected number of calls: >= 1
        Received number of calls:    0 */

});

/*
* 1 so custom matcher hay dung
* cac custom matcher nay dung de xac nhan xem mock function co dc goi hay khong
* hoac kiem tra cac .mock property

expect(mockFunc).toHaveBeenCalled();
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
expect(mockFunc).toMatchSnapshot();
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);
expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe('a mock name');
*/
