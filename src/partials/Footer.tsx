import { Input, Button } from '../components/commons';

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer>
            <div className='bg-gray-900 px-[50px] py-[80px] mx-0 lg:mx-[30px] lg:py-[100px] text-white flex flex-col items-center'>
                <h3 className='opacity-60 text-xs uppercase tracking-widest font-semibold'>
                    SIGN UP AND GET FREE COFFEE BAGS
                </h3>
                <h1 className='text-4xl py-5'>Coffee Updates</h1>
                <div className='flex items-center'>
                    <Input
                        type='text'
                        isDark
                        size='medium'
                        placeholder='helloAnhEm'
                        isTransparent
                    />
                    &nbsp;&nbsp;
                    <Button size='medium' hFull>
                        subcribe
                    </Button>
                </div>
            </div>
            <div className='my-[100px] grid'></div>
        </footer>
    );
};

export default Footer;
