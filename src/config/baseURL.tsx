import axios from 'axios';

const cartInstance = axios.create({
    baseURL: import.meta.env.VITE_CART_URL,
    timeout: 10000
});

const productInstance = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_URL,
    timeout: 10000
});

const orderInstance = axios.create({
    baseURL: import.meta.env.VITE_ORDER_URL,
    timeout: 10000
});

export { cartInstance, productInstance, orderInstance };
