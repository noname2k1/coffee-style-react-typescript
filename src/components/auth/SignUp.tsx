import {
    auth,
    // facebookProvider
} from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../config/routes';
import { firebaseErrorCatching } from '../../utils';
import { Loading } from '../commons';

const Signup = () => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        'confirm-password': '',
    });
    const navigate = useNavigate();
    const [isHidePassword, setIsHidePassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }));
    };

    const toggleIsHidePassword = () => {
        setIsHidePassword(!isHidePassword);
    };

    const handleSignUp = async () => {
        setError('');
        if (!value.email || !value.password || !value['confirm-password']) {
            setError('Please fill all fields');
            return;
        }
        if (value.password !== value['confirm-password']) {
            setError('Password and confirm password must be the same');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                value.email,
                value.password,
            );
            console.log(userCredential);
            navigate(routes.home, { replace: true });
        } catch (err) {
            setError(firebaseErrorCatching(err));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10'>
            <p
                tabIndex={0}
                role='heading'
                aria-label='Login to your account'
                className='text-2xl font-extrabold leading-6 text-gray-800'
            >
                Sign up
            </p>
            <p className='text-sm mt-4 font-medium leading-none text-gray-500 mb-5'>
                Already have an account?
                <Link
                    to={routes.auth}
                    tabIndex={0}
                    aria-label='Sign up here'
                    className='text-sm font-medium leading-none underline text-gray-800 inline-block ml-1'
                >
                    Sign in
                </Link>
            </p>

            <div>
                <label className='text-sm font-medium leading-none text-gray-800'>
                    Email
                </label>
                <input
                    aria-label='enter email adress'
                    role='input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={(e) => handleInputChange(e)}
                    value={value.email}
                    className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
            </div>
            <div className='mt-6 w-full'>
                <label className='text-sm font-medium leading-none text-gray-800'>
                    Password
                </label>
                <div className='relative flex items-center justify-center'>
                    <input
                        aria-label='enter Password'
                        role='input'
                        name='password'
                        placeholder='Password'
                        onChange={(e) => handleInputChange(e)}
                        value={value.password}
                        type={isHidePassword ? 'password' : 'text'}
                        className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    />
                    {/* eye */}
                    <div
                        className='absolute right-0 mt-2 mr-3 cursor-pointer'
                        onClick={toggleIsHidePassword}
                    >
                        {isHidePassword ? (
                            <svg
                                width={16}
                                height={16}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill='#71717A'
                                    d='M 4.2070312 2.7929688 L 2.7929688 4.2070312 L 5.0820312 6.4960938 C 2.4151866 8.6404109 1.1608367 11.416191 1.0800781 11.605469 L 0.91210938 12 L 1.0800781 12.394531 C 1.2130781 12.705531 4.428 20 12 20 C 14.066349 20 15.797205 19.449537 17.238281 18.652344 L 19.792969 21.207031 L 21.207031 19.792969 L 4.2070312 2.7929688 z M 12 4 C 10.789 4 9.7000313 4.200625 8.7070312 4.515625 L 10.353516 6.1621094 C 10.874516 6.0631094 11.419 6 12 6 C 17.396 6 20.167625 10.588094 20.890625 11.996094 C 20.596625 12.559094 19.952359 13.651953 18.943359 14.751953 L 20.369141 16.177734 C 22.049141 14.359734 22.854922 12.545531 22.919922 12.394531 L 23.087891 12 L 22.919922 11.605469 C 22.786922 11.294469 19.572 4 12 4 z M 6.5117188 7.9257812 L 8.5625 9.9765625 C 8.2079471 10.569059 8 11.258899 8 12 C 8 14.206 9.794 16 12 16 C 12.741101 16 13.430941 15.792053 14.023438 15.4375 L 15.748047 17.162109 C 14.674347 17.671227 13.428307 18 12 18 C 6.604 18 3.832375 13.411906 3.109375 12.003906 C 3.5249986 11.207948 4.6402378 9.3628241 6.5117188 7.9257812 z M 12.212891 8.0214844 L 15.978516 11.787109 C 15.869516 9.7541094 14.245891 8.1304844 12.212891 8.0214844 z M 10.074219 11.488281 L 12.511719 13.925781 C 12.347951 13.969804 12.177911 14 12 14 C 10.897 14 10 13.103 10 12 C 10 11.822089 10.030196 11.652049 10.074219 11.488281 z'
                                />
                            </svg>
                        ) : (
                            <svg
                                width={16}
                                height={16}
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z'
                                    fill='#71717A'
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-6 w-full'>
                <label className='text-sm font-medium leading-none text-gray-800'>
                    Confirm Password
                </label>
                <div className='relative flex items-center justify-center'>
                    <input
                        aria-label='enter Password'
                        role='input'
                        name='confirm-password'
                        placeholder='Confirm Password'
                        onChange={(e) => handleInputChange(e)}
                        value={value['confirm-password']}
                        type={isHidePassword ? 'password' : 'text'}
                        className='bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    />
                    {/* eye */}
                    <div
                        className='absolute right-0 mt-2 mr-3 cursor-pointer'
                        onClick={toggleIsHidePassword}
                    >
                        {isHidePassword ? (
                            <svg
                                width={16}
                                height={16}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill='#71717A'
                                    d='M 4.2070312 2.7929688 L 2.7929688 4.2070312 L 5.0820312 6.4960938 C 2.4151866 8.6404109 1.1608367 11.416191 1.0800781 11.605469 L 0.91210938 12 L 1.0800781 12.394531 C 1.2130781 12.705531 4.428 20 12 20 C 14.066349 20 15.797205 19.449537 17.238281 18.652344 L 19.792969 21.207031 L 21.207031 19.792969 L 4.2070312 2.7929688 z M 12 4 C 10.789 4 9.7000313 4.200625 8.7070312 4.515625 L 10.353516 6.1621094 C 10.874516 6.0631094 11.419 6 12 6 C 17.396 6 20.167625 10.588094 20.890625 11.996094 C 20.596625 12.559094 19.952359 13.651953 18.943359 14.751953 L 20.369141 16.177734 C 22.049141 14.359734 22.854922 12.545531 22.919922 12.394531 L 23.087891 12 L 22.919922 11.605469 C 22.786922 11.294469 19.572 4 12 4 z M 6.5117188 7.9257812 L 8.5625 9.9765625 C 8.2079471 10.569059 8 11.258899 8 12 C 8 14.206 9.794 16 12 16 C 12.741101 16 13.430941 15.792053 14.023438 15.4375 L 15.748047 17.162109 C 14.674347 17.671227 13.428307 18 12 18 C 6.604 18 3.832375 13.411906 3.109375 12.003906 C 3.5249986 11.207948 4.6402378 9.3628241 6.5117188 7.9257812 z M 12.212891 8.0214844 L 15.978516 11.787109 C 15.869516 9.7541094 14.245891 8.1304844 12.212891 8.0214844 z M 10.074219 11.488281 L 12.511719 13.925781 C 12.347951 13.969804 12.177911 14 12 14 C 10.897 14 10 13.103 10 12 C 10 11.822089 10.030196 11.652049 10.074219 11.488281 z'
                                />
                            </svg>
                        ) : (
                            <svg
                                width={16}
                                height={16}
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z'
                                    fill='#71717A'
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            {/* Error */}
            {error && (
                <p
                    role='alert'
                    aria-label='error'
                    className='text-xs font-medium leading-none text-red-500 mt-8'
                >
                    {error}
                </p>
            )}
            <div className='mt-8'>
                <button
                    role='button'
                    aria-label='create my account'
                    className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
                    onClick={handleSignUp}
                >
                    {isLoading ? <Loading className='ml-1.5' /> : 'Sign Up'}
                </button>
            </div>
        </div>
    );
};

export default Signup;
