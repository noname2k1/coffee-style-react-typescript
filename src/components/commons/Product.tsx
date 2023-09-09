import { Link } from 'react-router-dom';
import { Product as ProductType } from '../../types';
import { ItemImage } from '.';
import classNames from 'classnames';
import { formatCurrency } from '../../utils';

interface Props {
    [key: string]: any;
    item: ProductType;
    btnText: string;
    cols: 1 | 2 | 3;
}

const Product = (props: Props) => {
    return (
        <div className='product flex flex-col max-md:px-[10px]'>
            <Link
                to={'/product/' + props.item.slug}
                className={classNames('relative group inline-block', {
                    'min-h-[300px] md:min-h-[540px]': props.cols === 2,
                    'min-h-[380px]': props.cols === 3
                })}
            >
                <ItemImage
                    item={props.item}
                    type='product'
                    cols={props.cols}
                    btnText={props.btnText}
                />
            </Link>
            <div className='mt-4 text-center flex flex-col items-center'>
                <Link
                    to={'/product/' + props.item.slug}
                    className='text-black dark:text-white text-xl font-thin mt-3.5 mb-1.5 capitalize'
                >
                    {props.item.name}
                </Link>
                <div className='text-gray-900/50 dark:text-gray-200/50 flex items-center justify-center'>
                    <div
                        className={classNames({
                            'text-sm': !props.item.oldPrice,
                            'text-lg text-primary': props.item.oldPrice
                        })}
                    >
                        {formatCurrency(
                            props.item.price,
                            props.item.unit,
                            'de-DE'
                        )}
                    </div>
                    {(props.item.onSale || props.item.oldPrice! > 0) && (
                        <div className='text-sm line-through ml-4'>
                            {formatCurrency(
                                props.item.oldPrice!,
                                props.item.unit,
                                'de-DE'
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
