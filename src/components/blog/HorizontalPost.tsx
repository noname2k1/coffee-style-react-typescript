import { Post } from '../../types';
import moment from 'moment';
import { ItemImage } from '../commons';
import { Link } from 'react-router-dom';
interface Props {
    item: Post;
    link: string;
}

const HorizontalPost = (props: Props) => {
    return (
        <Link
            to={props.link}
            className='flex max-lg:flex-col'
            key={props.item.id}
        >
            <ItemImage
                type='blog'
                size='medium'
                item={props.item}
                key={props.item.id}
                btnText='Read the full story'
            />
            <div className='flex flex-col pl-10 pr-5 max-lg:mt-10'>
                <h3 className='mb-2.5 text-xl'>{props.item.title}</h3>
                <p
                    className='mb-2.5 text-black/60 cursor-default'
                    onClick={(e) => e.preventDefault()}
                >
                    {props.item.description}
                </p>
                <span
                    onClick={(e) => e.preventDefault()}
                    className='text-black/60 uppercase cursor-default tracking-widest text-xs font-xs'
                >
                    {moment(props.item.createdAt).format('MMMM D, YYYY')}
                </span>
            </div>
        </Link>
    );
};

export default HorizontalPost;
