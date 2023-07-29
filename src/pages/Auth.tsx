import images from '../assets/images';
import { Link, Navigate, Outlet } from 'react-router-dom';
import routes from '../config/routes';
import { useFirebaseAuth } from '../hooks';
import { Loading } from '../components/commons';

const Auth = () => {
    const { isPending, user } = useFirebaseAuth();
    // const signInWithFacebook = async () => {
    //     try {
    //         const signIn = await signInWithPopup(auth, facebookProvider);
    //         console.log(signIn);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    if (Object.keys(user).length > 0 && !isPending) {
        return <Navigate to={routes.home} replace />;
    }
    if (isPending) {
        return (
            <div className='h-screen w-screen flex justify-center items-center'>
                <Loading width={40} height={40} />
            </div>
        );
    }
    return (
        <div className='min-h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-10 px-4 select-none'>
            <div className='flex flex-col items-center justify-center'>
                <Link to={routes.home} className='inline-block mb-10'>
                    <img src={images.logo} alt='web-logo' className='invert' />
                </Link>
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
