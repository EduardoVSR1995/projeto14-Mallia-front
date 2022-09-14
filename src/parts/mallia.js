import axios from 'axios'

const URL = "http://localhost:5000/";

function getProducts(obj,header){
    const promis = axios.get(`${URI}products`,obj, header);
    return promis;
}

export {getProducts};