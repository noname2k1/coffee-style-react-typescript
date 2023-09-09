import { Post, Product } from '../../types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from '.';

interface Props {
    size?: 'small' | 'medium' | 'large';
    [key: string]: any;
    type: 'product' | 'blog';
    item: Product | Post;
    cols?: 1 | 2 | 3;
    btnText?: string;
}

const ItemImage = (props: Props) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames('relative group', {
                'h-[300px] md:h-[540px] w-full':
                    props.cols === 2 && props.type !== 'blog',
                'h-[380px] w-full': props.cols === 3 && props.type !== 'blog',
                'h-[300px] w-full':
                    (props.cols === 2 || props.cols === 3) &&
                    props.type === 'blog',
                'h-[80px] w-[80px]': props.size === 'small',
                'h-[460px] lg:w-[460px] w-full':
                    props.type === 'product' && props.size === 'medium',
                'h-[210px] lg:w-[260px] lg:min-w-[260px] w-full':
                    props.type === 'blog' && props.size === 'medium'
            })}
        >
            {(props.item.onSale ||
                (props.item.oldPrice > 0 &&
                    props.item.oldPrice > props.item.price)) &&
                props.size !== 'small' && (
                    <span className='text-primary capitalize absolute top-2 right-2 shadow-md bg-white p-2 px-4 font-semibold'>
                        {t('common.product.on_sale')}
                    </span>
                )}
            {props.btnText && (
                <div className='absolute invisible inset-0 group-hover:visible duration-300 opacity-0 group-hover:opacity-100 bg-black/10 dark:bg-white/10'>
                    <div className='absolute bottom-4 right-0 left-0 px-4 translate-y-2 group-hover:translate-y-0 duration-150'>
                        <Button size='medium'>{props.btnText}</Button>
                    </div>
                </div>
            )}
            <img
                src={props.item.image}
                alt={props.item?.name || props.item?.title}
                className={classNames('object-cover w-full h-full')}
            />
        </div>
    );
};

export default ItemImage;
