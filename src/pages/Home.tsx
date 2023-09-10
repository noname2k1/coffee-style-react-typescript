import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../assets/images';
import routes from '../config/routes';
import { HorizontalSection } from '../components/home';
import { ParallaxSection, ImageSection, Button } from '../components/commons';
import { fakeDatas3, fakeDatas4 } from '../faker';
import { getProducts } from '../services/productService';
import { Product } from '../types';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);

    const handleRedirectToProducts = () => {
        navigate(routes.products);
    };
    useEffect(() => {
        (async () => {
            try {
                const data = await getProducts();
                setProducts(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
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
                            {t('home.greeting1')}
                        </h3>
                        <h1 className='text-2xl md:text-5xl my-3 capitalize'>
                            {t('home.greeting2')}
                        </h1>
                        <p className='text-base md:text-lg px-2 opacity-80 font-medium mb-[30px]'>
                            {t('home.greeting3')}
                        </p>
                        <Button
                            size='medium'
                            onClick={handleRedirectToProducts}
                        >
                            {t('home.button1')}
                        </Button>
                    </div>
                </div>
            </div>

            <ImageSection
                type='product'
                title={t('home.title1')}
                items={products.slice(0, 2)}
                gridCols={2}
            />
            <ImageSection
                type='product'
                title={t('home.title2')}
                items={products.slice(3, 12)}
                gridCols={3}
            />
            <HorizontalSection title={t('home.title3')} items={fakeDatas3} />
            <ParallaxSection bgImage={images.pic_14} />
            <ImageSection
                type='blog'
                title={t('home.title7')}
                items={fakeDatas4.slice(0, 3)}
                gridCols={3}
            />
        </section>
    );
};

export default Home;
