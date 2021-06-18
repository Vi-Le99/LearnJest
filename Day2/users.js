//import axios from 'axios'; error. hay doi thanh ham duoi
const { default: axios } = require("axios");

class Users {
    static all() {
       // https://jsonplaceholder.typicode.com/users/         //     /users.json
        return axios.get('/users.json').then(resp => resp.data);
    }

}

//export default Users; hay doi thanh ham duoi

module.exports = Users;