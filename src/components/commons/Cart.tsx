import classnames from 'classnames';
import images from '../../assets/images';
import { useRecoilState } from 'recoil';
import { cartState } from '../../store/atoms';
import { Cart as CastType, Product } from '../../types';
import { Button, Input, ItemImage } from '.';
import { formatCurrency } from '../../utils';
import React from 'react';

const Cart = () => {
    const [cart, setCart] = useRecoilState<CastType>(cartState);

    const handleHideCart = () => {
        setCart((oldCart) => ({
            ...oldCart,
            isShow: false,
        }));
    };

    const handleChangeQuantity = (
        e: React.ChangeEvent<HTMLInputElement>,
        item: Product,
    ) => {
        let restValue: number = 0;
        let total = 0;
        const value = parseInt(e.target.value);
        const action = value > item.quantityInCart ? 'increase' : 'decrease';
        if (action === 'increase') {
            restValue = value - item.quantityInCart;
            if (restValue > item.quantity) {
                restValue = item.quantity;
            }
            total = cart.total + item.price * restValue;
        } else {
            restValue = item.quantityInCart - value;
            if (restValue < 1) {
                restValue = 1;
            }
            total = cart.total - item.price * restValue;
        }

        setCart((oldCart) => {
            return {
                ...oldCart,
                items: oldCart.items.map((product) => {
                    if (product.id === item.id) {
                        return {
                            ...product,
                            quantityInCart: value,
                        };
                    }
                    return product;
                }),
                total,
            };
        });
    };

    const handleRemoveItem = (productToRemove: Product) => {
        setCart((oldCart) => ({
            ...oldCart,
            items: oldCart.items.filter(
                (item) => item.id !== productToRemove.id,
            ),
            total:
                oldCart.total -
                productToRemove.price * productToRemove.quantityInCart,
        }));
    };

    return (
        <>
            {cart.isShow && (
                <div
                    onClick={handleHideCart}
                    className='bg-black/5 w-screen top-0 bottom-0 z-10 fixed'
                ></div>
            )}
            <aside
                className={classnames(
                    'fixed flex flex-col right-0 z-10 top-0 h-screen bg-gray-900 max-w-[480px] duration-200',
                    {
                        'translate-x-full': !cart.isShow,
                    },
                )}
            >
                <header className='border-b border-border-color py-[30px] px-10 flex justify-between items-center text-white'>
                    <h1 className='uppercase text-xs font-semibold tracking-widest opacity-60'>
                        your cart
                    </h1>
                    <img
                        className='h-3 w-3 opacity-60 hover:opacity-100 cursor-pointer'
                        src={images.close_icon}
                        alt='close-btn'
                        onClick={handleHideCart}
                    />
                </header>
                <div
                    className={classnames(
                        'flex flex-col flex-1 items-center p-8 pb-0',
                        {
                            'justify-center': cart.items.length === 0,
                            'gap-8': cart.items.length > 0,
                        },
                    )}
                >
                    {/* empty cart */}
                    {cart.items.length === 0 && (
                        <div className='flex flex-col text-white items-center mx-10 text-center'>
                            <img
                                src={images.empty_cart_icon}
                                className='h-[34px] w-[30px]'
                                alt='cart-empty-icon'
                            />
                            <h1 className='capitalize my-2.5 text-xl'>
                                your cart is empty
                            </h1>
                            <p className='opacity-60'>
                                It is a paradisematic country, in which roasted
                                parts of sentences fly into your mouth. Even the
                                all-powerful.
                            </p>
                        </div>
                    )}
                    {/* cart items */}
                    {cart.items.length > 0 &&
                        cart.items.map((item) => (
                            <div
                                className='flex items-center text-white'
                                key={item.id}
                            >
                                <ItemImage
                                    item={item}
                                    size='small'
                                    type='product'
                                />
                                <div className='cart-item-detail flex flex-col items-start px-5 flex-1 w-[224px]'>
                                    <h1 className='text-lg'>{item.name}</h1>
                                    <span>{formatCurrency(item.price)}</span>
                                    <button
                                        onClick={() => handleRemoveItem(item)}
                                        className='uppercase my-2 tracking-widest text-white/60 hover:text-white text-xs font-semibold'
                                    >
                                        Remove
                                    </button>
                                </div>
                                <Input
                                    type='number'
                                    isDark
                                    min={1}
                                    value={
                                        item.quantityInCart?.toString() || '1'
                                    }
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => handleChangeQuantity(e, item)}
                                    max={item.quantity}
                                    maxWidth={100}
                                    size='medium'
                                    isTransparent
                                />
                            </div>
                        ))}
                </div>
                {cart.items.length > 0 && (
                    <footer className='border-t border-border-color p-10'>
                        <div className='flex items-center justify-between mb-8'>
                            <h2 className='text-white text-xl'>Subtotal</h2>
                            <span className='text-white text-xl'>
                                {cart.total > 0
                                    ? formatCurrency(cart.total)
                                    : '--'}
                            </span>
                        </div>
                        <Button size='medium'>continue to checkout</Button>
                    </footer>
                )}
            </aside>
        </>
    );
};

export default Cart;
