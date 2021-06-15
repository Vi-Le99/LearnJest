const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    //isNull: ()=>null,
    isNull: () => undefined,
    createUser: () => {
        const user = { firstName: 'Vi' };
        // bi loi neu go user[lastName]='Le';
        user['lastName'] = 'Le'; //neu chua dinh nghia, lastName phai trong dau''
        user['firstName'] = 'Ami'; //gia su gan lai gia tri
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(exampleData => exampleData.data)
            .catch(error => 'error')

};
module.exports = functions;