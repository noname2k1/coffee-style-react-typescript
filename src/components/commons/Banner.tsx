import images from '../../assets/images';

const Banner = () => {
    return (
        <section className='mb-[100px] flex lg:h-[460px] items-center justify-center flex-col lg:flex-row w-full'>
            <img
                src={images.premium_image}
                alt='premium-image'
                className='lg:h-full h-[280px] max-lg:w-full object-cover'
            />
            <div className='flex-1 h-full bg-gray-900 text-white p-[70px] w-full text-center lg:text-left'>
                <h2 className='text-2xl'>
                    Handmade by{' '}
                    <span className='font-semibold'>CoffeeStyle.</span>
                </h2>
                <h3 className='text-lg space-y-4 opacity-90'>
                    The most versatile furniture system ever created. Designed
                    to fit your life.
                </h3>
                <div className='flex mt-8 justify-center flex-col lg:flex-row max-lg:items-center'>
                    <img
                        src={images.diamond}
                        alt='diamond-image'
                        className='w-[26px] h-[19px] object-cover mr-4 mb-4'
                    />
                    <div className='flex flex-col'>
                        <h3>Premium Quality</h3>
                        <p className='mt-2.5 opacity-70'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in.
                        </p>
                    </div>
                </div>
                <div className='flex mt-8 justify-center flex-col lg:flex-row max-lg:items-center'>
                    <img
                        src={images.light_bulb}
                        alt='light-bulb'
                        className='w-[16px] h-[24px] mr-4 mb-4'
                    />
                    <div className='flex flex-col'>
                        <h3>Gentle to the Environment</h3>
                        <p className='mt-2.5 opacity-70'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
