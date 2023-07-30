import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { DropdownItem } from '../../types';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
    role: 'tooltip' | 'dropdown';
    content?: string;
    children: React.JSX.Element;
    placement?:
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'left-start'
        | 'left-end'
        | 'right-start'
        | 'right-end';
    items?: DropdownItem[];
    hideOnClick?: boolean;
}

const TippyComponent = ({
    role = 'tooltip',
    content,
    placement = 'bottom-end',
    items,
    hideOnClick = false,
    children,
}: Props) => {
    const location = useLocation();

    const MainComponent = role === 'tooltip' ? Tippy : HeadlessTippy;

    const renderContent = () => {
        return (
            <div className='text-sm bg-white dark:bg-gray-800 shadow-lg py-1.5 rounded-sm min-w-full border border-border-light'>
                <ul className='flex flex-col'>
                    {items?.map((item) => {
                        const ItemComponent = item.link ? NavLink : 'li';
                        return (
                            <ItemComponent
                                to={item.link || ''}
                                state={{
                                    returnURL: location.pathname,
                                }}
                                key={item.id}
                                onClick={item.onClick}
                                className={classNames(
                                    'hover:bg-black/5 dark:hover:bg-white/5 inline-block bg-white dark:bg-gray-900 duration-100 cursor-pointer px-10 py-4',
                                    {
                                        'text-red-700': item.danger,
                                        'border-t border-border-light hover:bg-red-600 dark:hover:bg-red-600 hover:text-white':
                                            item.separator,
                                    },
                                )}
                            >
                                {item.text}
                            </ItemComponent>
                        );
                    })}
                </ul>
            </div>
        );
    };
    return (
        <MainComponent
            placement={placement}
            content={content}
            hideOnClick={hideOnClick}
            interactive={role === 'dropdown'}
            render={role === 'dropdown' ? renderContent : undefined}
        >
            {children}
        </MainComponent>
    );
};

export default TippyComponent;
