import classNames from 'classnames';
import React from 'react';

interface Props {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
    name?: string;
    isDark?: boolean;
    isTransparent?: boolean;
    min?: number;
    max?: number;
    minWidth?: number;
    maxWidth?: number;
    size?: 'small' | 'medium' | 'large';
    autoComplete?: string;
}

const Input = (props: Props) => {
    return (
        <div
            className={classNames('flex flex-col dark:text-white', {
                'max-sm:w-full': !props.minWidth && !props.maxWidth,
            })}
        >
            {props.label && (
                <label className='text-sm uppercase tracking-widest text-black/50 dark:text-white/50 font-semibold mb-2.5'>
                    {props.label}
                </label>
            )}
            <input
                className={classNames(
                    'outline-none border border-border-light duration-150',
                    {
                        'bg-black text-white hover:border-white/50 focus:border-white/50':
                            props.isDark &&
                            !props.isTransparent &&
                            props.type !== 'number',
                        'bg-transparent text-black dark:text-white hover:border-black/50 dark:hover:border-white/50 dark:focus:border-white/50 focus:border-black/50':
                            props.isTransparent &&
                            !props.isDark &&
                            props.type !== 'number',
                        'bg-transparent text-white hover:border-white/50 focus:border-white/50':
                            props.isTransparent &&
                            props.isDark &&
                            props.type !== 'number',
                        'bg-gray-100 text-black dark:text-white border-border-light hover:border-black/50 focus:border-black/50 dark:hover:border-white/50 dark:focus:border-white/50':
                            !props.isDark &&
                            !props.isTransparent &&
                            props.type !== 'number',
                        'py-[11.5px] px-[24px]': props.size === 'medium',
                        'py-[12px] px-[20px]': props.size === 'small',
                        'py-[20px] px-[28px]': props.size === 'large',
                        'max-sm:w-full': !props.minWidth,
                        'text-white bg-black': props.type === 'number',
                    },
                )}
                style={{ minWidth: props.minWidth, maxWidth: props.maxWidth }}
                min={props.min}
                max={props.max}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                autoComplete={props.autoComplete}
            />
        </div>
    );
};

export default Input;
