//const { default: axios } = require("axios"); hoac dung dong duoi
const axios = require("axios").default;

const functions = {
    add: (num1, num2) => num1 + num2,
    //isNull: ()=>null,
    isNull: () => undefined,
    createUser: () => {
        const user = { firstName: 'Vi' };
        // bi loi neu go user[lastName]='Le';
        user['lastName'] = 'Le';
        user['firstName'] = 'Ami';
        return user;
    },
    fetchUser: () =>
        axios //npm install axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(exampleData => exampleData.data)
            .catch(error => 'error')

};
module.exports = functions;