import axios from 'axios'

const URL = "https://mallia-back-dudu007.herokuapp.com/";

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

function getValidation(header){
    const promis = axios.get(`${URL}sessions`,header);
    return promis;
};


export {getProducts, postRegister, postSignIn, getValidation};