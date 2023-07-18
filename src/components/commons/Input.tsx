import classNames from 'classnames';

interface Props {
    label?: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    [key: string]: any;
    name?: string;
    isDark?: boolean;
    isTransparent?: boolean;
    min?: number;
    max?: number;
    minWidth?: number;
    maxWidth?: number;
    size?: 'small' | 'medium' | 'large';
}

const Input = (props: Props) => {
    const InputComponent = props.type === 'textarea' ? 'textarea' : 'input';
    return (
        <div
            className={classNames('flex flex-col', {
                'max-sm:w-full': !props.minWidth && !props.maxWidth,
            })}
        >
            {props.label && (
                <label className='text-sm uppercase tracking-widest text-black/50 font-semibold mb-2.5'>
                    {props.label}
                </label>
            )}
            <InputComponent
                className={classNames(
                    'outline-none border border-border-light duration-150',
                    {
                        'bg-black text-white hover:border-white/50 focus:border-white/50':
                            props.isDark && !props.isTransparent,
                        'bg-transparent text-black hover:border-black/50 focus:border-black/50':
                            props.isTransparent && !props.isDark,
                        'bg-transparent text-white hover:border-white/50 focus:border-white/50':
                            props.isTransparent && props.isDark,
                        'bg-gray-100 text-black border-border-light hover:border-black/50 focus:border-black/50':
                            !props.isDark && !props.isTransparent,
                        'py-[15px] px-[24px]': props.size === 'medium',
                        'py-[12px] px-[20px]': props.size === 'small',
                        'py-[20px] px-[28px]': props.size === 'large',
                        'max-sm:w-full': !props.minWidth,
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
            />
        </div>
    );
};

export default Input;
