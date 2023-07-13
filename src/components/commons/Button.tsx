import React from 'react';
import classNames from 'classnames';
interface Props {
    size: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
    fit?: boolean;
    hFull?: boolean;
    wFull?: boolean;
    isDark?: boolean;
}

const Button = (props: Props) => {
    return (
        <div
            className={classNames(
                'cursor-pointer hover:bg-opacity-80 text-center',
                {
                    'py-[16px] px-[24px]': props.size === 'medium',
                    'py-[12px] px-[20px]': props.size === 'small',
                    'py-[20px] px-[28px]': props.size === 'large',
                    'w-fit': props.fit,
                    'h-full': props.hFull,
                    'w-full': props.wFull,
                    'bg-black text-white': props.isDark,
                    'bg-white text-black': !props.isDark,
                },
            )}
            onClick={props.onClick}
        >
            <span className='uppercase text-xs font-semibold tracking-widest whitespace-nowrap'>
                {props.children}
            </span>
        </div>
    );
};

export default Button;
