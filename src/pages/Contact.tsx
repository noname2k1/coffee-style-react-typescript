import { useTranslation } from 'react-i18next';
import images from '../assets/images';
import { ContactForm } from '../components/contact';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section className='flex flex-col items-center'>
            <div className='bg-bg-secondary dark:bg-gray-900 text-center dark:text-white relative p-[30px] lg:pb-[200px] md:pt-[100px] md:mx-[30px]'>
                <h1 className='text-4xl mb-5'> {t('contact.main_title')}</h1>
                <p className='text-lg tracking-wider text-black/50 dark:text-white/50 lg:px-[200px]'></p>
                <div className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-[100px]'>
                    {t('contact.title0')}
                </div>
                <div className='lg:absolute lg:left-[50%] flex flex-col lg:flex-row max-lg:mt-10 max-lg:gap-10 lg:-translate-x-[50%] gap-x-5 top-[80%] w-full px-[30px] lg:px-0 lg:w-primary'>
                    <div className=''>
                        <img
                            src={images.contact_image_1}
                            alt='about-image-1'
                            className='h-[190px] w-full object-cover'
                        />
                        <div className=''>
                            <div className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-[30px]'>
                                UNITED KINGDOM
                            </div>
                            <h2 className='my-3 text-lg'>
                                Canary Wharf, London
                            </h2>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                Jubilee Place
                            </h3>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                London
                            </h3>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                E14 5NY
                            </h3>
                            <div className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-6 mb-3'>
                                {t('contact.opening_times')}
                            </div>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.mon')} -{' '}
                                {t('common.day_of_week.fri')} 08:00 to 22:00
                            </h2>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.sat')} - 09:00 to 20:00
                            </h2>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.sun')} - 12:00 to 18:00
                            </h2>
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src={images.contact_image_2}
                            alt='about-image-1'
                            className='h-[190px] w-full object-cover'
                        />
                        <div className=''>
                            <div className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-[30px]'>
                                UNITED STATES
                            </div>
                            <h2 className='my-3 text-lg'>
                                Venice Beach, California
                            </h2>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                9219 Old Kingston Street South
                            </h3>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                El Monte, CA
                            </h3>
                            <h3 className='text-md text-black/50 dark:text-white/50'>
                                91733
                            </h3>
                            <div className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-6 mb-3'>
                                {t('contact.opening_times')}
                            </div>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.mon')} -{' '}
                                {t('common.day_of_week.wed')} 09:00 to 21:00
                            </h2>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.thu')} -{' '}
                                {t('common.day_of_week.sat')} 09:00 to 22:00
                            </h2>
                            <h2 className='text-md text-black/50 dark:text-white/50'>
                                {t('common.day_of_week.sun')} - 10:00 to 19:00
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 lg:mt-[190px]'></div>
            <div className='lg:mt-[calc(190px+10%)]' data-aos='fade-up'>
                <ContactForm />
            </div>
            {/* map: 1194 đường láng càu giấy HN */}
            <div
                id='map'
                style={{
                    width: '100%',
                    height: '400px',
                }}
            >
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9936294855893!2d105.89108577491477!3d20.992892480647434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aeb74b57cbd9%3A0xa6c793b0bd878e!2zMTQgTmcuIDc1MyDEkC4gTmd1eeG7hW4gS2hvw6FpLCBUaGFuaCBUcsOsLCBIYWkgQsOgIFRyxrBuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1694163065497!5m2!1svi!2s'
                    width='600'
                    height='450'
                    style={{
                        border: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    allowFullScreen={false}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
            <div className='text-center mb-[100px] dark:text-white'>
                <div
                    data-aos='fade-up'
                    className='uppercase text-black/50 dark:text-white/50 text-sm tracking-widest font-semibold mt-[100px]'
                >
                    Directory
                </div>
                <div
                    className='flex gap-x-40 gap-y-6 my-10 justify-around flex-col lg:flex-row items-center'
                    data-aos='fade-up'
                >
                    <div className='uppercase text-black/50 dark:text-white/50 text-xs tracking-widest font-semibold'>
                        Press
                    </div>
                    <h2 className='text-lg'>Robb Kohler</h2>
                    <div className='text-black/50 dark:text-white/50'>
                        <h3>086-374-4962</h3>
                        <h3>robb.kohler@coffeestyle.com</h3>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-x-40 gap-y-6 justify-around my-10 lg:flex-row items-center'
                    data-aos='fade-up'
                >
                    <div className='uppercase text-black/50 dark:text-white/50 text-xs tracking-widest font-semibold'>
                        MANAGEMENT
                    </div>
                    <h2 className='text-lg'>Roob Dayana</h2>
                    <div className='text-black/50 dark:text-white/50'>
                        <h3>354-341-2750</h3>
                        <h3>roob.dayana@coffeestyle.com</h3>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-x-40 gap-y-6 justify-around my-10 lg:flex-row items-center'
                    data-aos='fade-up'
                >
                    <div className='uppercase text-black/50 dark:text-white/50 text-xs tracking-widest font-semibold'>
                        SUPPORT
                    </div>
                    <h2 className='text-lg'>Warren Marsh</h2>
                    <div className='text-black/50 dark:text-white/50'>
                        <h3>531-403-0376</h3>
                        <h3>warren.marsh@coffeestyle.com</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
