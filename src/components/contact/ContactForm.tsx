import { useState } from 'react';
import { Button, Input, TextArea } from '../commons';
import { SuccessMessage } from '../commons';

const ContactForm = () => {
    const [isPending, setIsPending] = useState(false);
    const [sended, setSended] = useState(false);

    const handleSend = () => {
        setIsPending(true);
        setTimeout(() => {
            setSended(true);
        }, 1000);
    };
    return (
        <div className='border border-border-light lg:w-primary max-lg:text-center dark:text-white'>
            <div className='flex p-10 gap-10 flex-col lg:flex-row'>
                <div className='flex flex-col gap-4'>
                    <div className='text-sm uppercase tracking-widest text-black/50 dark:text-white/50 font-semibold'>
                        contact form
                    </div>
                    <h2 className='text-lg'>
                        Drop us your message and I'll get back to you as soon as
                        possible.
                    </h2>
                    {!sended && (
                        <>
                            <Input
                                type='text'
                                label='name'
                                size='medium'
                                isDark={false}
                                isTransparent
                                placeholder='James Coffee'
                            />
                            <Input
                                type='email'
                                label='email address'
                                size='medium'
                                isDark={false}
                                isTransparent
                                placeholder='jamescoffee@gmail.com'
                            />
                            <TextArea
                                label='YOUR MESSAGE'
                                size='medium'
                                isDark={false}
                                isTransparent
                                placeholder='Hi ! I would like to ask something about mugs.'
                            />
                            <div className='max-lg:flex justify-center'>
                                <Button
                                    isDark
                                    fit
                                    size='medium'
                                    onClick={handleSend}
                                >
                                    {isPending
                                        ? 'please wait...'
                                        : 'Send Message'}
                                </Button>
                            </div>
                        </>
                    )}
                    {sended && <SuccessMessage direction='col' border />}
                </div>
                <div className='flex flex-col lg:pl-10 lg:border-l border-border-light'>
                    <div className='text-sm uppercase tracking-widest text-black/50 dark:text-white/50 font-semibold'>
                        contact form
                    </div>
                    <h2 className='text-lg my-3'>CoffeeStyle. Inc</h2>
                    <h3 className='text-md text-black/50 dark:text-white/50'>
                        Pride Ave,
                    </h3>
                    <h3 className='text-md text-black/50 dark:text-white/50'>
                        Hamlyn Heights
                    </h3>
                    <h3 className='text-md text-black/50 dark:text-white/50'>
                        VIC 3215
                    </h3>
                    <h3 className='text-md text-black/50 dark:text-white/50'>
                        Australia
                    </h3>
                    <div className='text-sm uppercase mt-5 tracking-widest text-black/50 dark:text-white/50 font-semibold'>
                        call us
                    </div>
                    <h2 className='text-lg'>
                        <a href='tel:+14155551212'>+1 (415) 555-1212</a>
                    </h2>
                    <div className='text-sm uppercase mt-5 tracking-widest text-black/50 dark:text-white/50 font-semibold'>
                        EMAIL US
                    </div>
                    <h2 className='text-lg'>
                        <a href='mailto:us@coffeestyle.io'>us@coffeestyle.io</a>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
