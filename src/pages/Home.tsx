import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';
import routes from '../config/routes';
import { HorizontalSection } from '../components/home';
import { ParallaxSection, ImageSection, Button } from '../components/commons';
import { fakeDatas1, fakeDatas2, fakeDatas3, fakeDatas4 } from '../faker';

const Home = () => {
    const navigate = useNavigate();
    const handleRedirectToProducts = () => {
        navigate(routes.products);
    };
    return (
        <section>
            <div className='flex lg:px-[30px] justify-center mb-[100px]'>
                <div className='w-full h-[530px] relative'>
                    <img
                        src={images.header_pic}
                        className={'w-full h-full'}
                        alt='header-picture'
                    />
                    <div className='absolute bg-opacity-20 text-center px-20 flex flex-col justify-center items-center bg-black inset-0 text-white'>
                        <h3 className='uppercase primary-typo'>
                            BEST PLACE TO BUY DESIGN
                        </h3>
                        <h1 className='text-5xl my-3 capitalize'>
                            Coffee mugs
                        </h1>
                        <p className='text-lg opacity-80 font-medium mb-[30px]'>
                            The most versatile furniture system ever created.
                            Designed to fit your life, made to move and grow.
                        </p>
                        <Button
                            size='medium'
                            onClick={handleRedirectToProducts}
                        >
                            Explore out products
                        </Button>
                    </div>
                </div>
            </div>
            <div className='px-[30px] text-center flex flex-col items-center justify-center mb-[100px]'>
                <div className='w-[70%]'>
                    <h1 className='tracking-widest text-black dark:text-white text-3xl my-5'>
                        Even the all-powerful Pointing has no control about the
                        blind texts.
                    </h1>
                    <p className='font-thin text-black/40 dark:text-white/40 tracking-widest'>
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                    </p>
                    <Link
                        to={routes.about}
                        className='inline-block border-b-2 text-primary border-border-color-lighter hover:border-primary duration-100 mt-6'
                    >
                        Read the full Story
                    </Link>
                </div>
            </div>

            <ImageSection
                type='product'
                title='featured mugs'
                items={fakeDatas1}
                gridCols={2}
            />
            <ImageSection
                type='product'
                title='more products'
                items={fakeDatas2.slice(0, fakeDatas2.length - 1)}
                gridCols={3}
            />
            <HorizontalSection
                title='BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE'
                items={fakeDatas3}
            />
            <ParallaxSection bgImage={images.pic_14} />
            <ImageSection
                type='blog'
                title='BEHIND THE MUGS, LIFESTYLE STORIES'
                items={fakeDatas4.slice(0, 3)}
                gridCols={3}
            />
        </section>
    );
};

export default Home;
