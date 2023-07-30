import classNames from 'classnames';
import { useState } from 'react';

interface Theme {
    name: string;
    value: string;
    type: 'light' | 'dark' | 'background';
}

const ThemeSettings = () => {
    const THEMES: Theme[] = [
        {
            name: 'Light',
            value: 'bg-white',
            type: 'light',
        },
        {
            name: 'Dark',
            value: 'bg-gray-900',
            type: 'dark',
        },
        {
            name: 'Blue',
            value: 'bg-blue-400',
            type: 'dark',
        },
        {
            name: 'Red',
            value: 'bg-red-400',
            type: 'dark',
        },
        {
            name: 'Green',
            value: 'bg-green-400',
            type: 'dark',
        },
        {
            name: 'Yellow',
            value: 'bg-yellow-400',
            type: 'dark',
        },
        {
            name: 'Indigo',
            value: 'bg-indigo-400',
            type: 'dark',
        },
        {
            name: 'Purple',
            value: 'bg-purple-400',
            type: 'dark',
        },
        {
            name: 'Pink',
            value: 'bg-pink-400',
            type: 'dark',
        },
        {
            name: 'Gray',
            value: 'bg-gray-400',
            type: 'dark',
        },
        {
            name: 'Blue Light',
            value: 'bg-blue-100',
            type: 'light',
        },
        {
            name: 'Red Light',
            value: 'bg-red-100',
            type: 'light',
        },
        {
            name: 'Green Light',
            value: 'bg-green-100',
            type: 'light',
        },
        {
            name: 'Yellow Light',
            value: 'bg-yellow-100',
            type: 'light',
        },
        {
            name: 'Indigo Light',
            value: 'bg-indigo-100',
            type: 'light',
        },
        {
            name: 'Purple Light',
            value: 'bg-purple-100',
            type: 'light',
        },
        {
            name: 'Pink Light',
            value: 'bg-pink-100',
            type: 'light',
        },
        {
            name: 'Gray Light',
            value: 'bg-gray-100',
            type: 'light',
        },
        {
            name: 'Flutter',
            value: 'bg-flutter',
            type: 'background',
        },
        {
            name: 'Nextjs',
            value: 'bg-nextjs',
            type: 'background',
        },
        {
            name: 'Nuxtjs',
            value: 'bg-nuxtjs',
            type: 'background',
        },
        {
            name: 'Remixjs',
            value: 'bg-remixjs',
            type: 'background',
        },
    ];

    const [themeState, setThemeState] = useState<Theme>(
        JSON.parse(window.localStorage.getItem('coffee-theme')!) || {
            name: 'Light',
            value: 'bg-white',
            type: 'light',
        },
    );

    const handleThemeChange = (theme: Theme) => {
        document.documentElement.className = '';
        document.documentElement.classList.add(theme.value);
        if (theme.type === 'background') {
            document.documentElement.classList.add(
                'bg-no-repeat',
                'bg-center',
                'bg-cover',
            );
        }
        if (theme.type === 'dark') {
            document.documentElement.classList.add('text-white');
        }
        if (theme.type === 'light') {
            document.documentElement.classList.add('text-black');
        }
        window.localStorage.setItem('coffee-theme', JSON.stringify(theme));
        setThemeState(theme);
    };

    return (
        <div className='flex items-center gap-5 justify-center flex-wrap py-10'>
            {THEMES.map((theme) => {
                return (
                    <div
                        onClick={() => handleThemeChange(theme)}
                        key={theme.name}
                        className={classNames(
                            'h-32 border-2 relative border-border-light rounded-md flex justify-center text-center px-2 cursor-pointer hover:brightness-75 duration-150',
                            {
                                [theme.value]: true,
                                'text-white':
                                    theme.type === 'dark' ||
                                    theme.type === 'background',
                                'w-52 bg-no-repeat bg-center bg-cover':
                                    theme.type === 'background',
                                'w-32 items-center':
                                    theme.type !== 'background',
                            },
                        )}
                    >
                        <span
                            className={classNames('p-1 rounded-md', {
                                'bg-black text-white': theme.type === 'dark',
                                'bg-white text-black': theme.type === 'light',
                            })}
                        >
                            {theme.name}
                        </span>
                        <div
                            className={classNames('absolute right-2 bottom-2', {
                                hidden: theme.value !== themeState.value,
                            })}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='30px'
                                height='30px'
                            >
                                <path
                                    fill='#32BEA6'
                                    d='M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z'
                                />
                                <path
                                    fill='#FFF'
                                    d='M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z'
                                />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ThemeSettings;
