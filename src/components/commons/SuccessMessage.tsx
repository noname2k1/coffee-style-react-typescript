import classNames from 'classnames';
import images from '../../assets/images';
import { useTranslation } from 'react-i18next';

interface Props {
    direction?: 'row' | 'col';
    message?: string;
    isTransparent?: boolean;
    isDark?: boolean;
    border?: boolean;
}

const SuccessMessage = ({
    direction = 'row',
    message = '',
    isTransparent = false,
    isDark = false,
    border = false,
}: Props) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames('flex text-center items-center', {
                'p-[30px] border border-border-light': border,
                'flex-row gap-x-2': direction === 'row',
                'flex-col': direction === 'col',
                'text-black bg-bg-secondary': !isDark,
                'text-white bg-transparent': isDark && isTransparent,
                'text-white bg-bg-secondary': isDark && !isTransparent,
                'bg-transparent': !isDark && isTransparent,
            })}
        >
            <img
                src={direction === 'col' ? images.check_col : images.check_row}
                className='w-[30px] h-[30px]'
                alt='check_icon'
            />
            <h3
                className={classNames('', {
                    'mt-1': direction === 'col',
                })}
            >
                {message || t('contact.form_title')}
            </h3>
        </div>
    );
};

export default SuccessMessage;
