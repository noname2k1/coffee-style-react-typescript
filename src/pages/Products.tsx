import { useState } from 'react';
import { categories } from '../faker/category';
import { CATEGORY_VALUES, Category, Product } from '../types';
import { fakeDatas2, fakeProducts } from '../faker';
import classNames from 'classnames';
import { ImageSection } from '../components/commons';
const Products = () => {
    const [currentCategory, setCurrentCategory] = useState<Category>(
        categories[0],
    );

    const [products, setProducts] = useState<Product[]>([
        ...fakeDatas2,
        ...fakeProducts,
    ]);

    const handleChangeCategory = (category: Category) => {
        setCurrentCategory(category);
        setProducts(() => {
            if (category.value !== CATEGORY_VALUES.ALL_PRODUCTS) {
                return [...fakeDatas2, ...fakeProducts].filter(
                    (product) => product.category === category.value,
                );
            }
            return [...fakeDatas2, ...fakeProducts];
        });
    };

    return (
        <section className='flex justify-center'>
            <div className='w-primary flex flex-col px-[30px] md:px-0 items-center'>
                <h1 className='text-4xl mt-[100px]'>{currentCategory.title}</h1>
                <p className='text-md text-black/60 mt-4 max-md:text-center'>
                    {currentCategory.slogan}
                </p>
                <div className='flex flex-col md:flex-row max-md:w-full justify-center items-center gap-2.5 mb-[100px] mt-10'>
                    {categories.map((category) => (
                        <div
                            className={classNames(
                                'py-2.5 w-full whitespace-nowrap max-md:text-center px-4 text-xs tracking-[0.2rem] font-semibold uppercase duration-100',
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
                <ImageSection items={products} type='product' gridCols={3} />
            </div>
        </section>
    );
};

export default Products;
