import { Link } from 'react-router-dom';
import images from '../assets/images';
import { Input, Button } from '../components/commons';
import { headerNavItems } from '../faker';

const Footer = () => {
    return (
        <footer>
            {/* black form */}
            <div
                data-aos='fade-up'
                className='bg-gray-900 px-[50px] py-[80px] mx-0 lg:mx-[30px] lg:py-[100px] text-white flex flex-col items-center'
            >
                <h3 className='opacity-60 text-xs uppercase tracking-widest font-semibold'>
                    SIGN UP AND GET FREE COFFEE BAGS
                </h3>
                <h1 className='text-4xl py-5'>Coffee Updates</h1>
                <div className='flex items-center flex-col sm:flex-row'>
                    <Input
                        type='text'
                        isDark
                        size='medium'
                        placeholder='helloAnhEm'
                        isTransparent
                        minWidth={350}
                    />
                    <span className='mt-4 sm:ml-4'></span>
                    <div className='w-full'>
                        <Button size='medium' hFull>
                            subcribe
                        </Button>
                    </div>
                </div>
            </div>
            {/* footer texts */}
            <div
                className='my-[100px] flex justify-center px-5 lg:px-0'
                data-aos='fade-up'
            >
                <div className='w-primary flex lg:grid flex-col items-center lg:items-start grid-rows-1 grid-cols-4 gap-8 text-black/50 text-sm tracking-wider'>
                    <div className='flex justify-center flex-col items-center'>
                        <img
                            src={images.logo}
                            alt='coffee-style-logo'
                            className='w-[111px]'
                        />
                        <div className='text-center'>
                            Delivering the best coffee life since 1996. From
                            coffee geeks to the real ones.
                        </div>
                        <div className='flex'>
                            <span className='hover:text-primary text-xs h-fit block mt-auto whitespace-nowrap'>
                                CoffeeStyle Inc. © 1996
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 flex-col text-center lg:text-left capitalize items-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            MENU
                        </div>
                        {headerNavItems.map((item) => (
                            <Link
                                to={item.path}
                                key={item.id}
                                className='hover:text-primary text-sm inline-block'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col gap-3 text-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            FOLLOW US
                        </div>
                        {[
                            'facebook.com',
                            'twitter.com',
                            'instagram.com',
                            'pinterest.com',
                        ].map((item) => (
                            <a
                                href={`https://${item}`}
                                target='_blank'
                                key={item}
                                className='hover:text-primary text-xs inline-block capitalize'
                            >
                                {item.split('.')[0]}
                            </a>
                        ))}
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            CONTACT US
                        </div>
                        <h3 className='mb-auto mt-5'>
                            We’re Always Happy to Help
                        </h3>
                        <h2 className='text-gray-900 dark:text-white text-2xl mb-5'>
                            us@coffeestyle.io
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
