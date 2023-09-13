import { useRecoilState } from 'recoil';
import { Cart, Product } from '../types';
import { cartState } from '../store/atoms';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../components/commons';
import payment_images from '../assets/images/payments/';
import { formatCurrency } from '../utils';
import { useTranslation } from 'react-i18next';
import { createOrder } from '../services/orderService';
import { useFirebaseAuth } from '../hooks';

const METHODS = [
    {
        name: 'Momo',
        value: 'momo',
        img: payment_images.momo,
        discount: 0.025
    },
    {
        name: 'VISA',
        value: 'visa',
        img: payment_images.visa,
        discount: 0.005
    },
    {
        name: 'DEBIT CARD',
        value: 'debit_card',
        img: payment_images.debit_card,
        discount: 0.01
    }
];

const Checkout = () => {
    const { t } = useTranslation();
    const { user } = useFirebaseAuth();
    const navigate = useNavigate();
    const [cart, setCart] = useRecoilState<Cart>(cartState);
    const [currentMethod, setCurrentMethod] = useState(METHODS[0]);
    const [cloneCart, setCloneCart] = useState([...cart.items]);
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState({
        address: '',
        contact: ''
    });

    const handleToggleCartItemCheckbox = (item: Product) => {
        if (cloneCart.find((cloneItem) => cloneItem._id === item._id)) {
            setCloneCart(
                cloneCart.filter((checkedItem) => checkedItem._id !== item._id)
            );
        } else setCloneCart([...cloneCart, item]);
    };
    const handlePaymentMethodChange = (paymentMethod: string) => {
        setCurrentMethod(
            METHODS.find((method) => method.value === paymentMethod)!
        );
    };

    const handleRemoveProduct = (product: Product) => {
        setCart((oldCart) => ({
            ...oldCart,
            items: oldCart.items.filter((item) => item._id !== product._id),
            total: oldCart.total - product.price * product.quantityInCart
        }));
        setCloneCart((prevProducts) =>
            prevProducts.filter(
                (prevProduct) => prevProduct._id !== product._id
            )
        );
    };
    // console.log(user);

    const handleGotoPayment = async () => {
        if (
            cloneCart.reduce((acc, curr) => {
                return acc + curr.price * curr.quantityInCart;
            }, 0) === 0
        )
            return;
        if (!/^[a-zA-Z0-9\s\-\,\#\/]{10,}$/.test(address)) {
            return setError((oldErrors) => ({
                ...oldErrors,
                address: t('validate.address')
            }));
        }
        if (
            !/^(0|\+84)(3[2-9]|5[2689]|7[06789]|8[1-689]|9[0-9])\d{7}$/.test(
                contact
            )
        ) {
            return setError((oldErrors) => ({
                ...oldErrors,
                contact: t('validate.contact')
            }));
        }
        try {
            const res = await createOrder(
                user.uid,
                address,
                contact,
                cart.items.map((item) => item._id),
                cart.items.map((item) => item.quantityInCart),
                currentMethod.value
            );
            navigate('/payment/' + currentMethod.value, {
                state: { order: res.data }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex lg:justify-center'>
            <div className='w-screen lg:w-primary max-lg:px-6'>
                <h1 className='font-bold text-2xl mt-4'>
                    {t('main_title.checkout')}
                </h1>
                <div className='flex max-lg:flex-col'>
                    <section className='flex-1 py-4 flex flex-col lg:mr-4'>
                        <div className='flex-1 overflow-y-auto flex flex-col gap-4 max-h-[560px]'>
                            {cart.items.map((item) => {
                                return (
                                    <div
                                        key={
                                            item._id +
                                            item.size?.diameter +
                                            item.size?.height
                                        }
                                        className='flex-col lg:flex-row flex relative items-center bg-black/10 p-4 rounded-md w-full'
                                    >
                                        <input
                                            type='checkbox'
                                            name='products[]'
                                            className='lg:mr-4 max-lg:mb-2'
                                            checked={
                                                cloneCart.findIndex(
                                                    (checkedItem) =>
                                                        checkedItem._id ===
                                                        item._id
                                                ) !== -1
                                                    ? true
                                                    : false
                                            }
                                            onChange={() =>
                                                handleToggleCartItemCheckbox(
                                                    item
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
                                        <p className='text-xl px-10 font-semibold mt-2'>
                                            {item.name}
                                        </p>
                                        <div className='flex max-lg:flex-col items-center'>
                                            <div className='flex justify-center'>
                                                <p>
                                                    {formatCurrency(
                                                        item.price,
                                                        item.unit,
                                                        'de-DE'
                                                    )}
                                                </p>
                                                <span className='px-1'>x</span>
                                                <span className='font-semibold'>
                                                    {item.quantityInCart}
                                                </span>
                                            </div>
                                            <div className='flex flex-col lg:ml-4 items-center'>
                                                <span>
                                                    {t('filter.diameter')}:{' '}
                                                    {item.size?.diameter} cm
                                                </span>
                                                <span>
                                                    {t('filter.height')}:{' '}
                                                    {item.size?.height} cm
                                                </span>
                                            </div>
                                        </div>
                                        <span
                                            onClick={() =>
                                                handleRemoveProduct(item)
                                            }
                                            className='absolute right-4 top-4 px-3 py-1 rounded hover:bg-red-600 duration-200 text-white cursor-pointer text-xl bg-red-800'
                                        >
                                            x
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='text-2xl font-semibold text-right mt-4'>
                            {t('common.subtotal')}:&nbsp;
                            {formatCurrency(
                                cloneCart.reduce(
                                    (acc, currentItem) =>
                                        acc +
                                        Number(currentItem.price) *
                                            Number(currentItem.quantityInCart),
                                    0
                                ),
                                cart.items[0]?.unit || 'VND',
                                'de-DE'
                            )}
                        </div>
                    </section>
                    <aside>
                        <h2 className='text-xl font-semibold'>
                            {t('checkout.payments')}
                        </h2>
                        <div className='flex items-center gap-4 py-4'>
                            {METHODS.map((method) => (
                                <div
                                    className={classNames(
                                        'border-2 p-1 rounded-lg cursor-pointer hover:border-red-600 duration-200',
                                        {
                                            'border-red-600':
                                                method.value ===
                                                currentMethod.value
                                        }
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
                        {/* form */}
                        <form action='' onSubmit={(e) => e.preventDefault()}>
                            <h2 className='text-xl font-semibold'>
                                {t('checkout.bill_details')}
                            </h2>
                            <div className='flex gap-4 py-4 flex-col'>
                                <div className='flex flex-col'>
                                    <label htmlFor='address'>
                                        {t('common.address')}
                                    </label>
                                    <input
                                        id='address'
                                        type='text'
                                        name='address'
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        placeholder={t('common.address')}
                                        className='p-2 outline-none border'
                                        onFocus={() =>
                                            setError((oldErrors) => ({
                                                ...oldErrors,
                                                address: ''
                                            }))
                                        }
                                    />
                                    {error.address && (
                                        <p className='text-red-700 font-semibold'>
                                            {error.address}
                                        </p>
                                    )}
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='contact'>
                                        {t('header.contact')}
                                    </label>
                                    <input
                                        id='contact'
                                        type='text'
                                        name='contact'
                                        value={contact}
                                        onChange={(e) =>
                                            setContact(e.target.value)
                                        }
                                        placeholder={
                                            t('header.contact') +
                                            '    ex: 09xxxxxxxx'
                                        }
                                        className='p-2 outline-none border'
                                        onFocus={() =>
                                            setError((oldErrors) => ({
                                                ...oldErrors,
                                                contact: ''
                                            }))
                                        }
                                    />
                                    {error.contact && (
                                        <p className='text-red-700 font-semibold'>
                                            {error.contact}
                                        </p>
                                    )}
                                </div>
                                <div className='flex justify-between'>
                                    <span>{t('checkout.discount')}:</span>
                                    <span className='text-red-600'>
                                        {formatCurrency(
                                            currentMethod.discount *
                                                cloneCart.reduce(
                                                    (acc, currentItem) =>
                                                        acc +
                                                        Number(
                                                            currentItem.price
                                                        ) *
                                                            Number(
                                                                currentItem.quantityInCart
                                                            ),
                                                    0
                                                ),
                                            cart.items[0]?.unit || 'VND',
                                            'de-DE'
                                        )}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>{t('checkout.total')}:</span>
                                    <span className='text-red-600 font-semibold'>
                                        {formatCurrency(
                                            cloneCart.reduce(
                                                (acc, currentItem) =>
                                                    acc +
                                                    Number(currentItem.price) *
                                                        Number(
                                                            currentItem.quantityInCart
                                                        ),
                                                0
                                            ) -
                                                currentMethod.discount *
                                                    cloneCart.reduce(
                                                        (acc, currentItem) =>
                                                            acc +
                                                            Number(
                                                                currentItem.price
                                                            ) *
                                                                Number(
                                                                    currentItem.quantityInCart
                                                                ),
                                                        0
                                                    ),
                                            cart.items[0]?.unit || 'VND',
                                            'de-DE'
                                        )}
                                    </span>
                                </div>
                                <Button
                                    isDark
                                    size='medium'
                                    onClick={handleGotoPayment}
                                >
                                    {t('checkout.pay')}
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
