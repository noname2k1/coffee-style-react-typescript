import * as baseURL from '../config/baseURL';
const getOrder = async (userid: string) => {
    try {
        const res = await baseURL.orderInstance.get('/?userid=' + userid);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createOrder = async (
    userid: string,
    address: string,
    contact: string,
    products: string[],
    quantities: number[],
    method: string
) => {
    try {
        const res = await baseURL.orderInstance.post('/?action=find', {
            userid,
            address,
            contact,
            products,
            quantities,
            method
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateOrder = async (userid: string, products: string[]) => {
    try {
        const res = await baseURL.orderInstance.patch('/' + userid, {
            products
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { getOrder, updateOrder, createOrder };
