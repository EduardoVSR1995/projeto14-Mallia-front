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

function postSaleConfirmation(cart, saleAuth) {
    const promise = axios.post(`${URL}cheCkout`, cart, saleAuth);
    return promise;
}

export {getProducts, postRegister, postSignIn, postSaleConfirmation};