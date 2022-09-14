import axios from 'axios'

const URL = "http://localhost:5000/";

function getProducts(obj,header){
    const promis = axios.get(`${URL}products`,obj, header);
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