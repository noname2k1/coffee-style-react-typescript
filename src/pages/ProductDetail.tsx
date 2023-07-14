import { useParams } from 'react-router-dom';
import { fakeDatas2 } from '../faker';
import { Cart, Product } from '../types';
import { Button, Input, ItemImage } from '../components/commons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/atoms';
import { formatCurrency } from '../utils';
import Banner from '../components/commons/Banner';
import { HomeSection } from '../components/home';
const ProductDetail = () => {
    const products: Product[] = [...fakeDatas2];
    const { slug } = useParams<{ slug: string }>();

    const product = products.find((item) => item.slug === slug);
    const [cart, setCart] = useRecoilState<Cart>(cartState);
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => window.scrollTo(0, 0), [slug]);

    const handleAddToCart = (product: Product) => {
        let quantityToAdd =
            quantity > product.quantity ? product.quantity : quantity || 1;
        if (quantity === 0) {
            setQuantity(1);
        }
        const existedProductIndex = cart.items.findIndex(
            (item) =>
                item.image === product.image && item.name === product.name,
        );
        if (existedProductIndex !== -1) {
            quantityToAdd += cart.items[existedProductIndex].quantityInCart;
            const newCart = [...cart.items];
            newCart[existedProductIndex] = {
                ...product,
                quantityInCart: quantityToAdd,
            };
            setCart({
                ...cart,
                items: newCart,
                total: newCart.reduce(
                    (acc, item) => acc + item.price * item.quantityInCart,
                    0,
                ),
            });
        } else {
            setCart((oldCart) => {
                return {
                    ...oldCart,
                    items: [
                        ...oldCart.items,
                        {
                            ...product,
                            quantityInCart: quantityToAdd,
                        },
                    ],
                    total: oldCart.total + product.price * quantityToAdd,
                };
            });
        }
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            setCart((oldCart) => {
                return {
                    ...oldCart,
                    isShow: true,
                };
            });
        }, 500);
    };

    return (
        <section className=''>
            {product && (
                <div className='flex flex-col items-center'>
                    <div className='product-wrapper w-full lg:w-primary px-5 lg:px-0 flex flex-col lg:flex-row my-[100px]'>
                        <div className='product-image w-full h-full'>
                            <ItemImage
                                item={product}
                                type='product'
                                size='medium'
                            />
                        </div>
                        <div className='product-detail lg:ml-[60px] text-center lg:text-left'>
                            <h1 className='text-4xl mt-[50px]'>
                                {product.name}
                            </h1>
                            <p className='text-lg text-black/30 mt-5 mb-6'>
                                {product.description}
                            </p>
                            {/* price */}
                            <div className='text-gray-900/80 flex items-center justify-center'>
                                <div
                                    className={classNames('uppercase', {
                                        'text-2xl text-left max-sm:w-full':
                                            !product.oldPrice,
                                        'text-3xl text-primary':
                                            product.oldPrice,
                                    })}
                                >
                                    {formatCurrency(product.price)}&nbsp;
                                    {product.unit}
                                </div>
                                {product.oldPrice && (
                                    <div className='text-sm line-through ml-4'>
                                        {formatCurrency(product.oldPrice)}
                                        <span className='uppercase'>
                                            {product.unit}
                                        </span>
                                    </div>
                                )}
                            </div>
                            {/* quantity */}
                            <div className='flex items-center justify-center flex-col sm:flex-row mt-5'>
                                <Input
                                    type='number'
                                    size='medium'
                                    min={1}
                                    max={product.quantity}
                                    value={quantity.toString()}
                                    onChange={(e) =>
                                        setQuantity(parseInt(e.target.value))
                                    }
                                />
                                <div className='sm:ml-3 mt-3 sm:mt-0 max-sm:w-full'>
                                    <Button
                                        size='medium'
                                        isDark
                                        wFull
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        {isAdding
                                            ? 'Adding to cart...'
                                            : 'Add to cart'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:w-primary text-center lg:text-left px-[30px] lg:px-0 gap-x-32 mb-[100px] flex-col lg:flex-row'>
                        {/* details */}
                        <div className='flex flex-col flex-1'>
                            <h3 className='primary-typo uppercase mb-5'>
                                Details
                            </h3>
                            <p className='font-thin text-black/50 space-y-3 tracking-wide px-[30px]'>
                                {product.details}
                            </p>
                        </div>
                        {/* dimensions */}
                        <div className='flex flex-col flex-1 mt-[50px] lg:mt-0'>
                            <h3 className='primary-typo uppercase mb-5'>
                                Dimensions
                            </h3>
                            <ul className='lg:list-disc space-y-2'>
                                {product.dimensions.map((item, index) => (
                                    <li
                                        key={index}
                                        className='font-thin space-y-3 whitespace-nowrap'
                                    >
                                        {index === 0 && (
                                            <span className='font-thin text-black/50'>
                                                Lenght (in):&nbsp;
                                            </span>
                                        )}
                                        {index === 1 && (
                                            <span className='font-thin text-black/50'>
                                                Height (in):&nbsp;
                                            </span>
                                        )}{' '}
                                        {index === 2 && (
                                            <span className='font-thin text-black/50'>
                                                Width (in):&nbsp;
                                            </span>
                                        )}{' '}
                                        {index === 3 && (
                                            <span className='font-thin text-black/50'>
                                                Weight (oz):&nbsp;
                                            </span>
                                        )}
                                        <span className='font-thin'>
                                            {item.toFixed(1)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* banner */}
                    <Banner />
                    {/* list */}
                    <HomeSection
                        type='product'
                        gridCols={3}
                        title='YOU MIGHT ALSO LIKE THESE'
                        items={products
                            .filter((item) => item.slug !== product.slug)
                            .slice(0, 3)}
                    />
                </div>
            )}
        </section>
    );
};

export default ProductDetail;
