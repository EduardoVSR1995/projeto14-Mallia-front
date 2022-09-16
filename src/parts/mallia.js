import axios from 'axios'

const URL = "https://git.heroku.com/mallia-back-dudu007.git";

function getProducts(header){
    const promis = axios.get(`${URL}products`,header);
    return promis;
};

function postRegister(register) {
    const promise = axios.post(`${URL}register`, register);
    return promise;
};

function postSignIn(login) {
    const promise = axios.post(`${URL}signIn`, login);
    return promise;
};

export {getProducts, postRegister, postSignIn};