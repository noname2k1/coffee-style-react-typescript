import * as baseURL from '../config/baseURL';
const getCart = async (userid: string) => {
    try {
        const res = await baseURL.cartInstance.get('/' + userid);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createCart = async (userid: string) => {
    try {
        const res = await baseURL.cartInstance.post('/', {
            userid,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateCart = async (userid: string, products: string[]) => {
    try {
        const res = await baseURL.cartInstance.patch('/' + userid, {
            products,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { getCart, updateCart, createCart };
