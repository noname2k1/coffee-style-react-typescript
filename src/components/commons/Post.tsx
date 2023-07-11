import { Link } from 'react-router-dom';
import { Blog } from '../../types';
import { Button } from '.';
import classNames from 'classnames';
import moment from 'moment';

interface Props {
    [key: string]: any;
    item: Blog;
    btnText: string;
    cols: 1 | 2 | 3;
}

const Post = (props: Props) => {
    return (
        <div className='flex flex-col max-md:px-[30px]'>
            <Link
                to={'/'}
                className={classNames('relative group inline-block', {
                    'min-h-[540px]': props.cols === 2,
                    'min-h-[380px]': props.cols === 3,
                })}
            >
                <img
                    src={props.item.image}
                    alt='product-image'
                    className={classNames('w-full object-cover', {
                        'h-[540px]': props.cols === 2,
                        'h-[380px]': props.cols === 3,
                    })}
                />
                <div className='absolute invisible inset-0 group-hover:visible duration-300 opacity-0 group-hover:opacity-100 bg-black/10'>
                    <div className='absolute bottom-4 right-0 left-0 px-4 translate-y-2 group-hover:translate-y-0 duration-150'>
                        <Button size='medium'>{props.btnText}</Button>
                    </div>
                </div>
                {props.item.onSale && (
                    <span className='text-primary absolute top-2 right-2 bg-white p-2 px-4 font-semibold'>
                        On Sale.
                    </span>
                )}
            </Link>
            <div className='mt-4 flex flex-col items-center'>
                <Link
                    to={'/'}
                    className='text-black text-xl font-thin mt-3.5 mb-1.5'
                >
                    {props.item.title}
                </Link>
                <p className='text-gray-900/50 flex items-center justify-center'>
                    {props.item.description}
                </p>
                <div className='text-gray-900/50 flex mt-5 w-full uppercase text-xs font-semibold tracking-widest items-center'>
                    {moment(props.item.createdAt).format('MMMM D, YYYY')}
                </div>
            </div>
        </div>
    );
};

export default Post;
