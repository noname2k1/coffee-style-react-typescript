import * as baseURL from '../config/baseURL';
const getProducts = async (
    skip: number = 0,
    limit: number = 0,
    name: string = '',
    random = '', //  `${slug}*${randomSize}`
    material: string = '',
    color: string = '',
    characteristic: string = '',
    brand: string = '',
    diameter: number = 10,
    height: number = 10
) => {
    try {
        const res = await baseURL.productInstance.get(
            `?skip=${skip}&limit=${limit}&name=${name}&material=${material}&random=${random}&color=${color}&brand=${brand}&characteristic=${characteristic}&diameter=${diameter}&height=${height}`
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
