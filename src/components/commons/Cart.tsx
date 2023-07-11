import classnames from 'classnames';
import images from '../../assets';

interface Props {
    showAble: [boolean, Function];
}

const Cart = (props: Props) => {
    const [isShow, setIsShow] = props.showAble;

    const handleHideCart = () => {
        setIsShow(false);
    };
    return (
        <>
            {isShow && (
                <div
                    onClick={handleHideCart}
                    className='bg-black/5 w-screen top-0 bottom-0 fixed'
                ></div>
            )}
            <aside
                className={classnames(
                    'fixed flex flex-col right-0 top-0 h-screen bg-gray-900 max-w-[480px] duration-200',
                    {
                        'translate-x-full': !isShow,
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
                <div className='flex flex-col justify-center flex-1 items-center'>
                    {/* empty cart */}
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
                </div>
            </aside>
        </>
    );
};

export default Cart;
