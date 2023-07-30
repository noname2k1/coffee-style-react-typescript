import classNames from 'classnames';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import routes from '../config/routes';
import { useFirebaseAuth } from '../hooks';
import { Loading } from '../components/commons';
import { UserSettings, ThemeSettings } from '../components/settings';

const Settings = () => {
    const { pathname, state } = useLocation();
    const navigate = useNavigate();
    const { user, isPending } = useFirebaseAuth();

    const handleGoBack = () => {
        navigate(state?.returnURL ? state.returnURL : routes.home, {
            replace: true,
        });
    };
    const [searchParams] = useSearchParams();

    const handleTabChange = (tab: string) => {
        navigate(pathname + '?tab=' + tab, {
            state: {
                ...state,
            },
            replace: true,
        });
    };

    const SIDEBAR_LIST: {
        id: string;
        text: 'user' | 'theme';
        isShow: boolean;
    }[] = [
        { id: uuid(), text: 'user', isShow: Object.keys(user).length > 0 },
        { id: uuid(), text: 'theme', isShow: true },
    ];

    return (
        <div className='min-h-screen lg:p-4 pb-0 flex flex-col'>
            <header className='pb-4 pt-4 lg:pt-0 pl-4 lg:pl-0 border-b border-border-light'>
                <button
                    onClick={handleGoBack}
                    className='rounded-full border-border-light p-2 border-2 hover:shadow-lg'
                >
                    <svg
                        height='25px'
                        width='25px'
                        id='Layer_1'
                        version='1.1'
                        viewBox='0 0 512 512'
                        xmlSpace='preserve'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                        <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                    </svg>
                </button>
            </header>
            <div className='flex flex-1'>
                <aside className='py-1 px-1 lg:px-4 border-r border-border-light'>
                    <ul className='pt-4'>
                        {SIDEBAR_LIST.map((item, index) => {
                            return (
                                <li
                                    onClick={() => handleTabChange(item.text)}
                                    className={classNames(
                                        'py-2 capitalize px-2 lg:px-10 duration-100 cursor-pointer hover:bg-black/10',
                                        {
                                            'font-semibold':
                                                searchParams.get('tab') ===
                                                    item.text ||
                                                (!searchParams.get('tab') &&
                                                    index === 0) ||
                                                (!searchParams.get('tab') &&
                                                    index === 1 &&
                                                    Object.keys(user).length ===
                                                        0),
                                            hidden: !item.isShow,
                                        },
                                    )}
                                    key={item.id}
                                >
                                    {item.text}
                                </li>
                            );
                        })}
                    </ul>
                </aside>
                <section className='flex-1 flex items-center justify-center px-4 lg:pl-8'>
                    {isPending && <Loading width={60} height={60} />}
                    {!isPending && (
                        <div className='w-full'>
                            {(searchParams.get('tab') === 'user' ||
                                !searchParams.get('tab')) &&
                                Object.keys(user).length > 0 && (
                                    <UserSettings data={user} />
                                )}
                            {(searchParams.get('tab') === 'theme' ||
                                (!searchParams.get('tab') &&
                                    Object.keys(user).length === 0)) && (
                                <ThemeSettings />
                            )}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Settings;
