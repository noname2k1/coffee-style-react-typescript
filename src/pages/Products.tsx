import { useState } from 'react';

const Products = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    return (
        <section className='flex justify-center'>
            <div className='w-primary'>
                <h1 className='text-4xl'>Out Products</h1>
            </div>
        </section>
    );
};

export default Products;
