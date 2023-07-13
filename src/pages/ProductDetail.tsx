import { useParams } from 'react-router-dom';
import { fakeDatas1, fakeDatas2 } from '../faker/home';
import { Cart, Product } from '../types';
import { Button, Input, ItemImage } from '../components/commons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/atoms';
const ProductDetail = () => {
    const products: Product[] = [...fakeDatas1, ...fakeDatas2];
    const { slug } = useParams<{ slug: string }>();
    const product = products.find((item) => item.slug === slug);
    const [cart, setCart] = useRecoilState<Cart>(cartState);
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => window.scrollTo({ top: 0 }), []);

    const handleAddToCart = (product: Product) => {
        let quantityToAdd =
            quantity > product.quantity ? product.quantity : quantity;

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
        <section className='flex justify-center'>
            {product && (
                <div className='product-wrapper w-primary px-5 lg:px-0 flex flex-col lg:flex-row my-[100px]'>
                    <div className='product-image min-w-[460px] h-[460px]'>
                        <ItemImage
                            item={product}
                            type='product'
                            size='medium'
                        />
                    </div>
                    <div className='product-detail lg:ml-[60px] text-center lg:text-left'>
                        <h1 className='text-4xl mt-[50px]'>{product.name}</h1>
                        <p className='text-lg text-black/30 mt-5 mb-6'>
                            {product.description}
                        </p>
                        {/* price */}
                        <div className='text-gray-900/50 flex items-center justify-center'>
                            <div
                                className={classNames({
                                    'text-md': !product.oldPrice,
                                    'text-3xl text-primary': product.oldPrice,
                                })}
                            >
                                {new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).format(product.price)}
                            </div>
                            {product.oldPrice && (
                                <div className='text-sm line-through ml-4'>
                                    {new Intl.NumberFormat('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(product.oldPrice)}
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
            )}
        </section>
    );
};

export default ProductDetail;
