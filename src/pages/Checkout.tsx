import { useRecoilState } from 'recoil';
import { Cart, Product } from '../types';
import { cartState } from '../store/atoms';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../components/commons';
import payment_images from '../assets/images/payments/';
import { formatCurrency } from '../utils';

const METHODS = [
    {
        name: 'Momo',
        value: 'momo',
        img: payment_images.momo,
        discount: 0.025,
    },
    {
        name: 'VISA',
        value: 'visa',
        img: payment_images.visa,
        discount: 0.005,
    },
    {
        name: 'DEBIT CARD',
        value: 'debit_card',
        img: payment_images.debit_card,
        discount: 0.01,
    },
];

const Checkout = () => {
    const navigate = useNavigate();
    const [cart] = useRecoilState<Cart>(cartState);
    const [currentMethod, setCurrentMethod] = useState(METHODS[0]);
    const [cloneCart, setCloneCart] = useState([...cart.items]);

    const handleToggleCartItemCheckbox = (item: Product) => {
        if (cloneCart.find((cloneItem) => cloneItem.id === item.id)) {
            setCloneCart(
                cloneCart.filter((checkedItem) => checkedItem.id !== item.id),
            );
        } else setCloneCart([...cloneCart, item]);
    };
    const handlePaymentMethodChange = (paymentMethod: string) => {
        setCurrentMethod(
            METHODS.find((method) => method.value === paymentMethod)!,
        );
    };

    return (
        <div className='flex lg:justify-center'>
            <div className='w-screen lg:w-primary max-lg:px-6'>
                <h1 className='font-bold text-2xl'>Check Out</h1>
                <div className='flex max-lg:flex-col'>
                    <section className='flex-1 py-4 flex flex-col lg:mr-4'>
                        <div className='flex-1 overflow-y-auto flex flex-col gap-4 max-h-[560px]'>
                            {cart.items.map((item) => {
                                return (
                                    <div
                                        key={item._id}
                                        className='flex relative items-center bg-black/10 p-4 rounded-md w-full'
                                    >
                                        <input
                                            type='checkbox'
                                            name='products[]'
                                            className='mr-4'
                                            checked={
                                                cloneCart.findIndex(
                                                    (checkedItem) =>
                                                        checkedItem.id ===
                                                        item.id,
                                                ) !== -1
                                                    ? true
                                                    : false
                                            }
                                            onChange={() =>
                                                handleToggleCartItemCheckbox(
                                                    item,
                                                )
                                            }
                                        />
                                        <Link to={`/product/${item.slug}`}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-24 h-24 rounded-md'
                                            />
                                        </Link>
                                        <p className='text-xl px-10 font-semibold'>
                                            {item.name}
                                        </p>
                                        <p>
                                            {formatCurrency(
                                                item.price,
                                                item.unit,
                                                'de-DE',
                                            )}
                                        </p>
                                        <span className='px-4'>x</span>
                                        <div className=''>
                                            <span className='font-semibold'>
                                                {item.quantityInCart}
                                            </span>
                                        </div>
                                        <span className='absolute right-4 top-4 px-3 py-1 rounded hover:bg-red-600 duration-200 text-white cursor-pointer text-xl bg-red-800'>
                                            x
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='text-2xl font-semibold text-right mt-4'>
                            subtotal:&nbsp;
                            {formatCurrency(
                                cloneCart.reduce(
                                    (acc, currentItem) =>
                                        acc +
                                        Number(currentItem.price) *
                                            Number(currentItem.quantityInCart),
                                    0,
                                ),
                                cart.items[0]?.unit,
                                'de-DE',
                            )}
                        </div>
                    </section>
                    <aside>
                        <h2 className='text-xl font-semibold'>Payments</h2>
                        <div className='flex items-center gap-4 py-4'>
                            {METHODS.map((method) => (
                                <div
                                    className={classNames(
                                        'border-2 p-1 rounded-lg cursor-pointer hover:border-red-600 duration-200',
                                        {
                                            'border-red-600':
                                                method.value ===
                                                currentMethod.value,
                                        },
                                    )}
                                    key={method.value}
                                    onClick={() =>
                                        handlePaymentMethodChange(method.value)
                                    }
                                >
                                    <img
                                        src={method.img}
                                        alt={method.name}
                                        className='w-12 h-12'
                                    />
                                </div>
                            ))}
                        </div>
                        <form action=''>
                            <h2 className='text-xl font-semibold'>
                                Billing Details
                            </h2>
                            <div className='flex gap-4 py-4 flex-col'>
                                <div className='flex flex-col'>
                                    <label htmlFor='address'>Address</label>
                                    <input
                                        id='address'
                                        type='text'
                                        name='address'
                                        placeholder='address'
                                        className='p-2 outline-none border'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='contact'>Contact</label>
                                    <input
                                        id='contact'
                                        type='text'
                                        name='contact'
                                        placeholder='contact'
                                        className='p-2 outline-none border'
                                    />
                                </div>
                                <div className='flex justify-between'>
                                    <span>Discount:</span>
                                    <span className='text-red-600'>
                                        {formatCurrency(
                                            currentMethod.discount *
                                                cloneCart.reduce(
                                                    (acc, currentItem) =>
                                                        acc +
                                                        Number(
                                                            currentItem.price,
                                                        ) *
                                                            Number(
                                                                currentItem.quantityInCart,
                                                            ),
                                                    0,
                                                ),
                                            cart.items[0]?.unit,
                                            'de-DE',
                                        )}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Total:</span>
                                    <span className='text-red-600 font-semibold'>
                                        {formatCurrency(
                                            cloneCart.reduce(
                                                (acc, currentItem) =>
                                                    acc +
                                                    Number(currentItem.price) *
                                                        Number(
                                                            currentItem.quantityInCart,
                                                        ),
                                                0,
                                            ) -
                                                currentMethod.discount *
                                                    cloneCart.reduce(
                                                        (acc, currentItem) =>
                                                            acc +
                                                            Number(
                                                                currentItem.price,
                                                            ) *
                                                                Number(
                                                                    currentItem.quantityInCart,
                                                                ),
                                                        0,
                                                    ),
                                            cart.items[0]?.unit,
                                            'de-DE',
                                        )}
                                    </span>
                                </div>
                                <Button
                                    isDark
                                    size='medium'
                                    onClick={() =>
                                        navigate(
                                            '/payment/' + currentMethod.value,
                                            {
                                                state: {
                                                    total:
                                                        cloneCart.reduce(
                                                            (
                                                                acc,
                                                                currentItem,
                                                            ) =>
                                                                acc +
                                                                Number(
                                                                    currentItem.price,
                                                                ) *
                                                                    Number(
                                                                        currentItem.quantityInCart,
                                                                    ),
                                                            0,
                                                        ) -
                                                        currentMethod.discount *
                                                            cloneCart.reduce(
                                                                (
                                                                    acc,
                                                                    currentItem,
                                                                ) =>
                                                                    acc +
                                                                    Number(
                                                                        currentItem.price,
                                                                    ) *
                                                                        Number(
                                                                            currentItem.quantityInCart,
                                                                        ),
                                                                0,
                                                            ),
                                                },
                                            },
                                        )
                                    }
                                >
                                    Pay
                                </Button>
                            </div>
                        </form>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
