import React from 'react';
import images from '../assets/images';
import ContentWrapper from '../components/commons/ContentWrapper';
import { authors } from '../faker/person';
import { ParallaxSection } from '../components/commons';

const InTernalWrapper = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => {
    return (
        <div className='text-center mb-[100px]'>
            <div
                className='text-sm text-black/50 dark:text-white/50 tracking-widest uppercase font-semibold mb-[100px]'
                data-aos='fade-up'
            >
                {label}
            </div>
            {children}
        </div>
    );
};

const Phase = ({
    time,
    title,
    children,
}: {
    time: string;
    title: string;
    children?: React.ReactNode;
}) => {
    return (
        <div data-aos='fade-up'>
            <div className='text-black/60 dark:text-white/60 text-xs tracking-widest uppercase font-semibold'>
                {time}
            </div>
            <h3 className='my-2.5 dark:text-white'>{title}</h3>
            <p className='text-black/50 dark:text-white/50 lg:px-[200px]'>
                {children}
            </p>
            <div className='flex items-center justify-center my-[50px]'>
                <div className='w-[200px] border-t-2 h-[60px] border-border-light'>
                    <div className='w-1/2 h-full border-r-2 border-border-light'></div>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section className='flex flex-col items-center'>
            <div className='bg-bg-secondary dark:bg-gray-900 dark:text-white text-center relative p-[30px] pb-[200px] md:pt-[100px] md:mx-[30px]'>
                <h1 className='text-4xl mb-5'>About</h1>
                <p className='text-lg tracking-wider text-black/50 dark:text-white/50 lg:px-[200px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                </p>
                <div className='absolute left-[50%] -translate-x-[50%] top-[80%] w-full px-[30px] lg:px-0 lg:w-primary'>
                    <img
                        src={images.about_image_1}
                        alt='about-image-1'
                        className='h-[320px] w-full object-cover'
                    />
                </div>
            </div>
            <div className='mt-[calc(320px+10%)]'></div>
            <ContentWrapper
                label='INTRODUCTIONS'
                title='Overlaid the jeepers uselessly much excluding everyday life.'
            >
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth. Even the all-powerful Pointing
                has no control about the blind texts it is an almost
                unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of
                Grammar.
            </ContentWrapper>
            <div className='flex flex-col lg:w-primary max-lg:px-[30px]'>
                <div
                    className='flex items-center mb-32 gap-5 text-center flex-col lg:flex-row'
                    data-aos='fade-up'
                >
                    <div className='max-lg:order-2'>
                        <h3 className='text-[24px] mb-[50px] lg:mb-5 dark:text-white'>
                            Overlaid the jeepers uselessly much excluding
                            everyday life.
                        </h3>
                        <p className='text-black/50 dark:text-white/50'>
                            It is a paradisematic country, in which roasted
                            parts of sentences fly into your mouth. Even the
                            all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic life One day
                            however a small line of blind text by the name of
                            Lorem Ipsum decided to leave for the far World of
                            Grammar.
                        </p>
                    </div>
                    <img
                        src={images.about_image_2}
                        alt='about-image-2'
                        className='w-full max-lg:order-1 lg:w-[460px] max-lg:h-[380px] object-cover'
                    />
                </div>
                <div
                    className='flex items-center gap-5 text-center flex-col lg:flex-row mb-[100px]'
                    data-aos='fade-left'
                >
                    <img
                        src={images.about_image_3}
                        alt='about-image-3'
                        className='w-full max-lg:order-1 lg:w-[460px] max-lg:h-[380px] object-cover'
                    />
                    <div className='max-lg:order-2'>
                        <h3 className='text-[24px] mb-[50px] lg:mb-5 dark:text-white'>
                            Overlaid the jeepers uselessly much excluding
                            everyday life.
                        </h3>
                        <p className='text-black/50 dark:text-white/50'>
                            It is a paradisematic country, in which roasted
                            parts of sentences fly into your mouth. Even the
                            all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic life One day
                            however a small line of blind text by the name of
                            Lorem Ipsum decided to leave for the far World of
                            Grammar.
                        </p>
                    </div>
                </div>
                <InTernalWrapper label='INTRODUCTIONS'>
                    <div
                        className='flex items-center justify-center gap-10 lg:gap-5 max-lg:flex-col'
                        data-aos='fade-right'
                    >
                        {authors.map((author) => (
                            <div className='flex flex-col' key={author.id}>
                                <img
                                    src={author.avatar}
                                    alt={author.id}
                                    className='max-lg:w-[300px] object-cover'
                                />
                                <h3 className='text-[24px] lg:mb-3 mt-10 dark:text-white'>
                                    {author.name}
                                </h3>
                                <span className='text-black/50 dark:text-white/50 tracking-widest uppercase text-sm font-semibold'>
                                    {author.job}
                                </span>
                            </div>
                        ))}
                    </div>
                </InTernalWrapper>
            </div>
            <div className='w-full'>
                <ParallaxSection bgImage={images.paralax_image_2} />
            </div>
            <div className='lg:w-primary max-lg:px-[30px]'>
                <InTernalWrapper label='HISTORY TIMELINE'>
                    <Phase
                        time='OCTOBER 2018'
                        title='One day however a small line'
                    >
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum.
                    </Phase>
                    <Phase
                        time='AUGUST 2018'
                        title='Overlaid the jeepers uselessly'
                    >
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum.
                    </Phase>
                    <Phase
                        time='JUNE 2018'
                        title='Pointing has no control about'
                    >
                        It is a paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum.
                    </Phase>
                    <Phase
                        time='november 2017'
                        title="We've started CoffeeStyle."
                    ></Phase>
                </InTernalWrapper>
            </div>
        </section>
    );
};

export default About;
