import images from '../assets/images';
import { Link, Outlet } from 'react-router-dom';
import routes from '../config/routes';
// import { auth } from '../config/firebase';

const Auth = () => {
    // const signInWithFacebook = async () => {
    //     try {
    //         const signIn = await signInWithPopup(auth, facebookProvider);
    //         console.log(signIn);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // const getCurrentUser = () => {
    //     const user = auth.currentUser;
    //     if (user) {
    //         console.log(user);
    //         console.log(auth?.currentUser?.email);
    //     } else {
    //         console.log('No user is signed in.');
    //     }
    // };

    // const signOut = async () => {
    //     try {
    //         await auth.signOut();
    //         console.log('sign out');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

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
