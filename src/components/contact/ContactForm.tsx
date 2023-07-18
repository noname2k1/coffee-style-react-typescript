import { Button, Input } from '../commons';
import { SuccessMessage } from '../commons';

const ContactForm = () => {
    return (
        <div className='border border-border-light lg:w-primary max-lg:text-center'>
            <div className='flex p-10 gap-10 flex-col lg:flex-row'>
                <div className='flex flex-col gap-4'>
                    <div className='text-sm uppercase tracking-widest text-black/50 font-semibold'>
                        contact form
                    </div>
                    <h2 className='text-lg'>
                        Drop us your message and I'll get back to you as soon as
                        possible.
                    </h2>
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
                    <Input
                        type='textarea'
                        label='YOUR MESSAGE'
                        size='medium'
                        isDark={false}
                        isTransparent
                        placeholder='Hi ! I would like to ask something about mugs.'
                    />
                    <div className='max-lg:flex justify-center'>
                        <Button isDark fit size='medium'>
                            Send Message
                        </Button>
                    </div>
                    <SuccessMessage direction='col' border />
                </div>
                <div className='flex flex-col lg:pl-10 lg:border-l border-border-light'>
                    <div className='text-sm uppercase tracking-widest text-black/50 font-semibold'>
                        contact form
                    </div>
                    <h2 className='text-lg my-3'>CoffeeStyle. Inc</h2>
                    <h3 className='text-md text-black/50'>Pride Ave,</h3>
                    <h3 className='text-md text-black/50'>Hamlyn Heights</h3>
                    <h3 className='text-md text-black/50'>VIC 3215</h3>
                    <h3 className='text-md text-black/50'>Australia</h3>
                    <div className='text-sm uppercase mt-5 tracking-widest text-black/50 font-semibold'>
                        call us
                    </div>
                    <h2 className='text-lg'>
                        <a href='tel:+14155551212'>+1 (415) 555-1212</a>
                    </h2>
                    <div className='text-sm uppercase mt-5 tracking-widest text-black/50 font-semibold'>
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
