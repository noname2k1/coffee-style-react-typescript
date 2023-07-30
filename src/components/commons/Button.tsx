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
    disabled?: boolean;
    aferIcon?: React.ReactNode;
}

const Button = (props: Props) => {
    return (
        <div
            className={classNames('text-center', {
                'py-[16px] px-[24px]': props.size === 'medium',
                'py-[12px] px-[20px]': props.size === 'small',
                'py-[20px] px-[28px]': props.size === 'large',
                'w-fit': props.fit,
                'h-full': props.hFull,
                'w-full': props.wFull,
                'bg-black text-white': props.isDark,
                'bg-white text-black': !props.isDark,
                'opacity-50 cursor-not-allowed': props.disabled,
                'hover:bg-opacity-80 dark:hover:brightness-110 cursor-pointer':
                    !props.disabled,
            })}
            onClick={props.onClick}
        >
            <span className='uppercase text-xs font-semibold tracking-widest whitespace-nowrap flex items-center'>
                {props.children}
                {props.aferIcon && (
                    <span className='ml-2'>{props.aferIcon}</span>
                )}
            </span>
        </div>
    );
};

export default Button;
