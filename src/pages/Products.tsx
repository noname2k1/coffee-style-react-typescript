import { useEffect, useState } from 'react';
import { categories } from '../faker/category';
import { CATEGORY_VALUES, Category, Product } from '../types';
import classNames from 'classnames';
import { ImageSection } from '../components/commons';
import { getProducts } from '../services/productService';
import Skeleton from 'react-loading-skeleton';

const Products = () => {
    const [currentCategory, setCurrentCategory] = useState<Category>(
        categories[0],
    );

    const [products, setProducts] = useState<Product[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);

    const handleChangeCategory = (category: Category) => {
        setCurrentCategory(category);
        setProductsFiltered(() => {
            if (category.value !== CATEGORY_VALUES.ALL_PRODUCTS) {
                return products.filter(
                    (product) => product.category === category.value,
                );
            }
            return products;
        });
    };

    useEffect(() => {
        (async () => {
            try {
                const data = await getProducts();
                setProducts(data.data);
                setProductsFiltered(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <section className='flex justify-center'>
            <div className='w-primary flex flex-col px-[30px] md:px-0 items-center'>
                <h1 className='text-4xl mt-[100px] dark:text-white'>
                    {currentCategory.title}
                </h1>
                <p className='text-md text-black/60 md:px-8 dark:text-white/60 mt-4 text-center'>
                    {currentCategory.slogan}
                </p>
                <div className='flex flex-col md:flex-row max-md:w-full justify-center items-center gap-2.5 mb-[100px] mt-10'>
                    {categories.map((category) => (
                        <div
                            className={classNames(
                                'py-2.5 w-full whitespace-nowrap max-md:text-center dark:text-white px-4 text-xs tracking-[0.2rem] font-semibold uppercase duration-100',
                                {
                                    'cursor-pointer border hover:text-primary':
                                        currentCategory.id !== category.id,
                                    'cursor-default border border-primary text-primary':
                                        currentCategory.id === category.id,
                                },
                            )}
                            key={category.id}
                            onClick={() => handleChangeCategory(category)}
                        >
                            {category.name}
                        </div>
                    ))}
                </div>
                {productsFiltered ? (
                    <ImageSection
                        items={productsFiltered}
                        type='product'
                        gridCols={3}
                    />
                ) : (
                    <Skeleton width={1000} height={100} />
                )}
            </div>
        </section>
    );
};

export default Products;
