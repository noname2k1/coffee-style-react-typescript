import { useEffect } from 'react';
import images from '..//assets//images';
import { Button } from '../components/commons';
import { useNavigate } from 'react-router-dom';
import routes from '../config/routes';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Not Found';
    }, []);
    return (
        <section className='text-white h-screen w-screen bg-[url("assets/images/header_pic.jpg")] bg-cover bg-center flex justify-center items-center'>
            <div className='flex flex-col items-center px-[30px] text-center'>
                <img
                    src={images.not_found}
                    alt='not-found-404'
                    className='w-16 h-16 mb-5'
                />
                <h1 className='capitalize text-4xl'>Page not found</h1>
                <p className='my-[30px] text-lg'>
                    The page you are looking for doesn't exist or has been
                    moved.
                </p>
                <Button
                    size='medium'
                    onClick={() => {
                        document.title = 'Coffee Style';
                        navigate(routes.home, { replace: true });
                    }}
                >
                    Back to home
                </Button>
            </div>
        </section>
    );
};

export default NotFound;
