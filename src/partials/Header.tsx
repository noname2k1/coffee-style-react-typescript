import images from '../assets/images';
import routes from '../config/routes';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cart } from '../components/commons';
import { headerNavItems } from '../faker/home';
import classNames from 'classnames';
// interface Props {}

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isCartShow, setIsCartShow] = useState<boolean>(false);

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClickNavItem = () => {
        setIsMobileMenuOpen(false);
    };

    const handleShowCart = () => {
        setIsCartShow(true);
    };

    useEffect(() => {}, []);
    return (
        <header className='h-20 flex justify-center items-center relative'>
            <div className='flex items-center justify-between lg:justify-around h-full px-12 lg:px-6 max-lg:w-primary w-[1110px]'>
                {/* LOGO */}
                <Link to={routes.home} className='h-6'>
                    <img
                        src={images.logo}
                        alt='coffeestyle-logo'
                        className='h-full object-contain'
                    />
                </Link>
                {/* HEADER_NAV_PC */}
                <nav
                    className={classNames(
                        'flex items-center z-10 max-lg:shadow-md justify-center max-lg:flex-col max-lg:absolute right-0 overflow-hidden top-full left-0 bg-white duration-[300ms]',
                        {
                            'max-lg:h-0 max-lg:invisible': !isMobileMenuOpen,
                            'max-lg:h-[246px] max-lg:visible max-lg:py-2':
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
                                    'group whitespace-nowrap max-lg:py-[15px] hover:opacity-100 tracking-widest uppercase text-xs font-semibold hover:text-gray-900 ml-8 duration-300',
                                    {
                                        'text-gray-900 opacity-100': isActive,
                                        'text-gray-800 opacity-60': !isActive,
                                    },
                                )
                            }
                        >
                            {nav.name}
                            <div className='group-hover:w-full w-0 h-0.5 bg-primary duration-75 max-lg:hidden'></div>
                        </NavLink>
                    ))}
                </nav>
                <div className='flex items-center justify-center'>
                    {/* CART_BTN */}
                    <button
                        onClick={handleShowCart}
                        className='group flex items-center mr-[30px] opacity-60 hover:opacity-100 justify-center whitespace-nowrap uppercase text-xs font-semibold text-gray-800 hover:text-gray-900 ml-8 duration-300'
                    >
                        <img
                            src={images.cart_icon}
                            alt='shopping-cart'
                            className='w-4 h-5 mr-2.5 text-gray-800 mb-0.5'
                        />
                        Cart
                        <span className='bg-gray-800 flex justify-center group-hover:bg-gray-900 text-white px-1.5 py-0.5 rounded-xl ml-2'>
                            12
                        </span>
                    </button>
                    {/* MOBILE_MENU_BTN */}
                    <button
                        onClick={handleMobileMenu}
                        className='text-gray-800 hover:text-gray-900 w-5 h-3.5 opacity-60 hover:opacity-100 mx-1 lg:hidden'
                    >
                        <img src={images.menu_icon} alt='mobile-menu-icon' />
                    </button>
                </div>
            </div>
            <Cart showAble={[isCartShow, setIsCartShow]} />
        </header>
    );
};

export default Header;
