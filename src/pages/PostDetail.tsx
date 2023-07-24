import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../components/commons/BreadCrumb';
import { fakeDatas4 } from '../faker/';
import { authors } from '../faker/person';
import moment from 'moment';
const PostDetail = () => {
    const { slug } = useParams();
    console.log(slug);
    const currentPost = fakeDatas4.find((item) => item.slug === slug);
    const category = currentPost?.category ?? '';
    const author = authors.find((item) => item.slug === currentPost?.author);
    return (
        <section className='flex justify-center'>
            {currentPost && (
                <div className='lg:w-primary max-lg:px-[30px]'>
                    <BreadCrumb
                        list={[
                            {
                                name: 'blog',
                                path: 'blog',
                            },
                            {
                                name: category,
                                path: 'blog/' + category,
                            },
                        ]}
                    />
                    <h1 className='text-4xl lg:text-[44px]'>
                        {currentPost.title}
                    </h1>
                    <p className='text-lg tracking-wider text-black/50'>
                        {currentPost.description}
                    </p>
                    <img
                        src={currentPost.image}
                        alt={currentPost.slug}
                        className='object-cover mt-[30px]'
                    />
                    <div className='min-h-[400px] border border-t-0 mb-[100px] flex max-lg:flex-col'>
                        <div className=''>
                            <div className='border p-10'>
                                <h2 className='text-sm mb-6 font-semibold text-black/30 uppercase tracking-widest'>
                                    Written by
                                </h2>
                                <img
                                    src={author?.avatar}
                                    alt={author?.name}
                                    className='w-[140px] object-cover'
                                />
                                <h3 className='text-base my-5'>
                                    {author?.name}
                                </h3>
                                <p className='text-sm tracking-wider text-black/50 w-[140px]'>
                                    {author?.description}
                                </p>

                                <Link
                                    to={`/author/${author?.slug}`}
                                    className='py-0.5 border-b-2 border-border-light hover:border-primary text-primary text-base inline-block mt-5'
                                >
                                    All author's posts
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col p-10'>
                            <div className='flex items-center mb-[50px]'>
                                <div className='text-gray-900/50 max-lg:justify-center whitespace-nowrap flex uppercase text-xs font-semibold tracking-[0.2em] items-center'>
                                    {moment(currentPost.createdAt).format(
                                        'MMMM D, YYYY',
                                    )}
                                </div>
                                <div className='bg-border-light h-[1px] w-full ml-5'></div>
                            </div>
                            <section>Post content here!</section>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PostDetail;
