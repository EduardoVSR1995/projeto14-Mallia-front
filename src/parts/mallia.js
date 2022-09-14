import axios from 'axios'

const URL = "http://localhost:5000/";

function getProducts(header){
    const promis = axios.get(`${URL}products`,header);
    return promis;
}

export {getProducts};