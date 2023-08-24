import images from '../assets/images';
import routes from '../config/routes';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Cart, Loading, TippyComponent } from '../components/commons';
import { headerNavItems } from '../faker';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/atoms';
import { Cart as CartType } from '../types';
import { useFirebaseAuth } from '../hooks';
import { userDropdown } from '../faker/dropdownArrays';

const Header = () => {
    const { pathname } = useLocation();
    const { isPending, user } = useFirebaseAuth();
    const [cart, setCart] = useRecoilState<CartType>(cartState);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    // console.log(user);

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClickNavItem = () => {
        setIsMobileMenuOpen(false);
    };

    const handleShowCart = () => {
        setCart((oldCart) => ({
            ...oldCart,
            isShow: true,
        }));
    };

    useEffect(() => {
        setCart((prevCart) => {
            return {
                ...prevCart,
                isShow: false,
            };
        });
    }, [pathname]);

    return (
        <header className='h-20 flex justify-center items-center relative dark:text-white dark:border-y border-border-color'>
            <div className='flex items-center justify-between lg:justify-around h-full px-6 max-lg:w-primary w-[1110px]'>
                {/* LOGO */}
                <Link to={routes.home} className='h-6'>
                    <img
                        src={images.logo}
                        alt='coffeestyle-logo'
                        className='h-full object-contain dark:invert'
                    />
                </Link>
                {/* HEADER_NAV */}
                <nav
                    className={classNames(
                        'flex items-center z-10 max-lg:shadow-md max-lg:bg-white justify-center max-lg:flex-col max-lg:absolute right-0 overflow-hidden top-full left-0 duration-[300ms]',
                        {
                            'max-lg:h-0 max-lg:invisible': !isMobileMenuOpen,
                            'max-lg:h-[292px] max-lg:visible max-lg:py-2':
                                isMobileMenuOpen,
                        },
                    )}
                >
                    {headerNavItems.map((nav) => (
                        <NavLink
                            onClick={handleClickNavItem}
                            key={nav.id}
                            to={nav.path}
                            className={({ isActive }) =>
                                classNames(
                                    'group whitespace-nowrap max-lg:py-[15px] lg:dark:text-white hover:opacity-100 tracking-widest uppercase text-xs font-semibold hover:text-gray-900 ml-8 duration-300',
                                    {
                                        'text-gray-900 opacity-100': isActive,
                                        'text-gray-800 opacity-60': !isActive,
                                        'lg:hidden': nav.id === 'login',
                                    },
                                )
                            }
                        >
                            {nav.name}
                            <div className='group-hover:w-full w-0 h-0.5 bg-primary dark:bg-orange-800 duration-75 max-lg:hidden'></div>
                        </NavLink>
                    ))}
                </nav>
                <div className='flex items-center justify-center'>
                    {/* CART_BTN */}
                    <button
                        onClick={handleShowCart}
                        className='group flex items-center mr-[15px] opacity-60 hover:opacity-100 justify-center whitespace-nowrap uppercase text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-gray-900 ml-8 duration-300'
                    >
                        <img
                            src={images.cart_icon}
                            alt='shopping-cart'
                            className='w-4 h-5 mr-2.5 text-gray-800 mb-0.5 dark:invert'
                        />
                        Cart
                        <span className='bg-gray-800 flex justify-center group-hover:bg-gray-900 text-white px-1.5 py-0.5 rounded-xl ml-2'>
                            {cart.items.length}
                        </span>
                    </button>
                    {/* MOBILE_MENU_BTN */}
                    <button
                        onClick={handleMobileMenu}
                        className='text-gray-800 hover:text-gray-900 mr-[15px] w-5 h-3.5 opacity-60 hover:opacity-100 mx-1 lg:hidden'
                    >
                        <img
                            src={images.menu_icon}
                            alt='mobile-menu-icon'
                            className='dark:invert'
                        />
                    </button>
                    {/* user */}
                    {Object.keys(user).length > 0 && !isPending && (
                        <TippyComponent role='dropdown' items={userDropdown}>
                            <div className='flex items-center cursor-pointer'>
                                <span className='text-gray-800 dark:text-gray-200 text-xs font-semibold mr-2 hidden lg:block'>
                                    {user.displayName ||
                                        user.email.split('@')[0]}
                                </span>
                                <div
                                    className={classNames('w-8 h-8', {
                                        'rounded-full border border-border-light overflow-hidden':
                                            user.photoURL,
                                    })}
                                >
                                    <img
                                        src={
                                            user.photoURL
                                                ? user.photoURL
                                                : images.no_image
                                        }
                                        alt='user-avatar'
                                    />
                                </div>
                            </div>
                        </TippyComponent>
                    )}
                    {/* AUTH_BTN */}
                    {(Object.keys(user).length === 0 || !user) &&
                        !isPending && (
                            <div className='flex items-center'>
                                <Link
                                    to={routes.auth}
                                    className='text-gray-800 dark:text-white block mr-[15px] hover:text-gray-900 opacity-60 hover:opacity-100 mx-1 tracking-widest font-semibold max-lg:hidden'
                                >
                                    Login
                                </Link>
                                {/* settings btn */}
                                <Link
                                    to={routes.settings}
                                    state={{
                                        returnURL: pathname,
                                    }}
                                    className='hover:text-gray-900 text-gray-400 dark:hover:text-gray-200 duration-150'
                                >
                                    <svg
                                        fill='currentColor'
                                        height='24px'
                                        width='24px'
                                        version='1.1'
                                        id='Capa_1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        xmlnsXlink='http://www.w3.org/1999/xlink'
                                        viewBox='0 0 471.8 471.8'
                                        xmlSpace='preserve'
                                    >
                                        <g
                                            id='SVGRepo_bgCarrier'
                                            strokeWidth={0}
                                        />
                                        <g
                                            id='SVGRepo_tracerCarrier'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                        <g id='SVGRepo_iconCarrier'>
                                            <g>
                                                <g>
                                                    <path d='M26.9,82.5H317c5.7,33.2,34.7,58.5,69.4,58.5c38.9,0,70.5-31.6,70.5-70.5S425.3,0,386.4,0c-34.8,0-63.7,25.3-69.4,58.5 H26.9c-6.6,0-12,5.4-12,12S20.3,82.5,26.9,82.5z M386.4,24c25.6,0,46.5,20.8,46.5,46.5S412.1,117,386.4,117s-46.5-20.9-46.5-46.5 S360.8,24,386.4,24z' />
                                                    <path d='M303.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12C309.2,223.3,303.9,228.7,303.9,235.3z' />
                                                    <path d='M260.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12C266.2,223.3,260.9,228.7,260.9,235.3z' />
                                                    <path d='M346.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12S346.9,228.7,346.9,235.3z' />
                                                    <path d='M389.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12S389.9,228.7,389.9,235.3z' />
                                                    <path d='M174.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12S174.9,228.7,174.9,235.3z' />
                                                    <path d='M217.9,235.3c0,6.6,5.4,12,12,12s12-5.4,12-12s-5.4-12-12-12C223.2,223.3,217.9,228.7,217.9,235.3z' />
                                                    <path d='M85.4,305.8c38.9,0,70.5-31.6,70.5-70.5s-31.6-70.5-70.5-70.5s-70.5,31.6-70.5,70.5C14.9,274.1,46.5,305.8,85.4,305.8z M85.4,188.8c25.6,0,46.5,20.8,46.5,46.5s-20.8,46.5-46.5,46.5s-46.5-20.9-46.5-46.5S59.7,188.8,85.4,188.8z' />
                                                    <path d='M386.4,330.8c-34.8,0-63.7,25.3-69.4,58.5H26.9c-6.6,0-12,5.4-12,12s5.4,12,12,12H317c5.7,33.2,34.7,58.5,69.4,58.5 c38.9,0,70.5-31.6,70.5-70.5S425.3,330.8,386.4,330.8z M386.4,447.8c-25.6,0-46.5-20.8-46.5-46.5s20.8-46.5,46.5-46.5 s46.5,20.8,46.5,46.5S412.1,447.8,386.4,447.8z' />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        )}
                    {/* <button onClick={() => auth.signOut()}>logout</button> */}
                    {isPending && <Loading />}
                </div>
            </div>
            <Cart />
        </header>
    );
};

export default Header;
