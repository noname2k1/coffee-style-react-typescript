import { Link } from 'react-router-dom';
import { Post as PostType } from '../../types';
import { ItemImage } from '.';
import classNames from 'classnames';
import moment from 'moment';

interface Props {
    [key: string]: any;
    item: PostType;
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
                <ItemImage
                    type='blog'
                    item={props.item}
                    cols={props.cols}
                    btnText={props.btnText}
                />
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
                <div className='text-gray-900/50 max-lg:justify-center flex mt-5 w-full uppercase text-xs font-semibold tracking-widest items-center'>
                    {moment(props.item.createdAt).format('MMMM D, YYYY')}
                </div>
            </div>
        </div>
    );
};

export default Post;
