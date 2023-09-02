import * as baseURL from '../config/baseURL';
const getProducts = async (
    skip: number = 0,
    limit: number = 0,
    name: string = '',
    category: string = '',
    random = '', //  `${slug}*${randomSize}`
) => {
    try {
        const res = await baseURL.productInstance.get(
            `?skip=${skip}&limit=${limit}&name=${name}&category=${category}&random=${random}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const showProduct = async (slug: string) => {
    try {
        const res = await baseURL.productInstance.get('/' + slug);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const showProducts = async (ids: string) => {
    try {
        const res = await baseURL.productInstance.get('/show-many/' + ids);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// const createCart = async (userid: string) => {
//     try {
//         const res = await baseURL.productInstance.post('/', {
//             userid,
//         });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

// const updateCart = async (userid: string, products: string[]) => {
//     try {
//         const res = await baseURL.productInstance.patch('/' + userid, {
//             products,
//         });
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };

export { getProducts, showProduct, showProducts };
