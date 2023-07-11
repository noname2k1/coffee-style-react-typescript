import images from '../assets';
import { HeaderNav } from '../types';
import routes from '../config/routes';
import { NavLink } from 'react-router-dom';

interface Props {}

const Header = (props: Props) => {
    const navs: HeaderNav[] = [
        {
            id: 0,
            name: 'home',
            path: routes.home,
        },
        {
            id: 1,
            name: 'our products',
            path: routes.products,
        },
        {
            id: 2,
            name: 'blog',
            path: routes.blog,
        },
        {
            id: 3,
            name: 'about',
            path: routes.about,
        },
        {
            id: 4,
            name: 'contact',
            path: routes.contact,
        },
    ];
    return (
        <header className='h-20 flex justify-center items-center'>
            <div className='flex items-center justify-between lg:justify-around h-full px-6 w-[940px]'>
                {/* LOGO */}
                <div className='h-6'>
                    <img
                        src={images.logo}
                        alt='coffeestyle-logo'
                        className='h-full object-contain'
                    />
                </div>
                {/* HEADER_NAV_PC */}
                <nav className='flex items-center justify-center max-lg:hidden'>
                    {navs.map((nav) => (
                        <NavLink
                            key={nav.id}
                            to={nav.path}
                            className='whitespace-nowrap opacity-60 hover:opacity-100 tracking-widest uppercase text-xs font-semibold text-gray-500 hover:text-gray-900 ml-8 duration-300'
                        >
                            {nav.name}
                        </NavLink>
                    ))}
                </nav>
                <div className='flex items-center justify-center'>
                    {/* CART_BTN */}
                    <button className='group flex items-center mr-[30px] opacity-60 hover:opacity-100 justify-center whitespace-nowrap uppercase text-xs font-semibold text-gray-500 hover:text-gray-900 ml-8 duration-300'>
                        <img
                            src={images.cart_icon}
                            alt='shopping-cart'
                            className='w-4 h-5 mr-2.5 text-gray-500 mb-0.5'
                        />
                        Cart
                        <span className='bg-gray-500 flex justify-center group-hover:bg-gray-900 text-white px-1.5 py-0.5 rounded-xl ml-2'>
                            12
                        </span>
                    </button>
                    {/* MOBILE_MENU_BTN */}
                    <button className='text-gray-500 hover:text-gray-900 w-5 h-3.5 opacity-60 hover:opacity-100 mx-1 lg:hidden'>
                        <img src={images.menu_icon} alt='mobile-menu-icon' />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
