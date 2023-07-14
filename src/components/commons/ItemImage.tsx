import { Blog, Product } from '../../types';
import classNames from 'classnames';

interface Props {
    size?: 'small' | 'medium' | 'large';
    [key: string]: any;
    type: 'product' | 'blog';
    item: Product | Blog;
    cols?: 1 | 2 | 3;
}

const ItemImage = (props: Props) => {
    return (
        <div
            className={classNames('relative', {
                'h-[540px] w-full': props.cols === 2,
                'h-[380px] w-full': props.cols === 3,
                'h-[80px] w-[80px]': props.size === 'small',
                'h-[460px] lg:w-[460px] w-full':
                    props.type === 'product' && props.size === 'medium',
            })}
        >
            {props.item.onSale && props.size !== 'small' && (
                <span className='text-primary absolute top-2 right-2 shadow-md bg-white p-2 px-4 font-semibold'>
                    On Sale.
                </span>
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
