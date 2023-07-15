import moment from 'moment';
import { ItemImage } from '../components/commons';
import { ImageSection } from '../components/commons';
import { fakeDatas4 } from '../faker';
import images from '../assets/images';
import { Link, NavLink, useParams } from 'react-router-dom';
import routes from '../config/routes';
import { postCategories } from '../faker/category';
import classNames from 'classnames';
import BreadCrumb from '../components/commons/BreadCrumb';
import { useEffect } from 'react';
const Blog = () => {
    const { category: categoryParam } = useParams<{ category: string }>();
    const posts = [...fakeDatas4].filter(
        (post) =>
            (post.category === categoryParam && post) ||
            (!categoryParam && post),
    );
    const matchedCategory = postCategories.find(
        (category) => category.value === categoryParam,
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryParam]);
    return (
        <section className='flex justify-center mt-[100px]'>
            <div className='flex lg:w-primary flex-col items-center'>
                {/* Bread crumb */}
                {categoryParam && <BreadCrumb />}
                <header
                    className={classNames('pb-20 w-full', {
                        'text-center px-40': !categoryParam,
                        'pl-4': categoryParam,
                    })}
                >
                    <h1 className='text-4xl'>
                        {matchedCategory
                            ? matchedCategory.name
                            : 'Read coffee stories on our Blog'}
                    </h1>
                    <p
                        className={classNames(
                            'text-md text-black/60 mt-4 max-md:text-center',
                            {
                                'px-20': !categoryParam,
                            },
                        )}
                    >
                        {matchedCategory
                            ? matchedCategory.slogan
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                    </p>
                </header>
                <ImageSection
                    type='blog'
                    gridCols={2}
                    items={fakeDatas4.reverse().slice(0, 2)}
                    title='featured posts'
                />
                <div className='flex mb-[100px]'>
                    <div className='mr-10'>
                        <h2 className='text-[22px] capitalize flex-1 mb-10 border-b pb-4 border-border-light'>
                            Latest posts
                        </h2>
                        <div className='flex flex-col gap-y-[50px]'>
                            {posts.map((item) => (
                                <Link
                                    to={`/post/${item.slug}`}
                                    className='flex'
                                    key={item.id}
                                >
                                    <ItemImage
                                        type='blog'
                                        size='medium'
                                        item={item}
                                        key={item.id}
                                        btnText='Read the full story'
                                    />
                                    <div className='flex flex-col pl-10 pr-5'>
                                        <h3 className='mb-2.5 text-xl'>
                                            {item.title}
                                        </h3>
                                        <p
                                            className='mb-2.5 text-black/60 cursor-default'
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            {item.description}
                                        </p>
                                        <span
                                            onClick={(e) => e.preventDefault()}
                                            className='text-black/60 uppercase cursor-default tracking-widest text-xs font-xs'
                                        >
                                            {moment(item.createdAt).format(
                                                'MMMM D, YYYY',
                                            )}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-[22px] capitalize mb-10 lg:w-[300px] first-line pb-4 border-b border-border-light'>
                            About us
                        </h2>
                        <div className=''>
                            <img
                                src={images.logo}
                                alt='logo'
                                className='mb-[15px] h-[24px]'
                            />
                            <p className='text-black/60 mb-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique.
                            </p>
                            <Link
                                to={routes.about}
                                className='border-b-2 text-primary border-border-color-lighter py-2 hover:border-primary'
                            >
                                Read the full story
                            </Link>
                            <h2 className='text-[22px] capitalize mb-10 lg:w-[300px] mt-10 pt-2.5 pb-4 border-b border-border-light'>
                                Categories
                            </h2>
                            <div className='flex flex-col gap-4'>
                                {postCategories.map((postCategory) => (
                                    <NavLink
                                        className='flex items-center group'
                                        key={postCategory.id}
                                        to={`${routes.blog}/${postCategory.value}`}
                                    >
                                        <span
                                            className={classNames(
                                                'border-l-2 duration-200 pl-5 py-2',
                                                {
                                                    'cursor-pointer group-hover:border-primary border-border-color-lighter text-black/70 group-hover:text-black':
                                                        categoryParam !==
                                                        postCategory.value,
                                                    'cursor-default border-primary text-black':
                                                        categoryParam ===
                                                            postCategory.value ||
                                                        (!categoryParam &&
                                                            !postCategory.value),
                                                },
                                            )}
                                        >
                                            {postCategory.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>

                            {/* <h2 className='text-[22px] capitalize mb-10 lg:w-[300px] mt-10 pt-2.5 pb-4 border-b border-border-light'>
                                Authors
                            </h2>
                            <div className='flex flex-col gap-4'>
                                {postCategories.map((postCategory) => (
                                    <div
                                        className='flex items-center group'
                                        key={postCategory.id}
                                    >
                                        <span
                                            className={classNames(
                                                'border-l-2 duration-200 pl-5 py-2',
                                                {
                                                    'cursor-pointer group-hover:border-primary border-border-color-lighter text-black/70 group-hover:text-black':
                                                        category.id !==
                                                        postCategory.id,
                                                    'cursor-default border-primary text-black':
                                                        category.id ===
                                                        postCategory.id,
                                                },
                                            )}
                                        >
                                            {postCategory.name}
                                        </span>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* block quote */}
                {!categoryParam && (
                    <>
                        <div className='blog-quote my-[30px] p-[30px] text-xl text-center border-primary border-l-2 border-b-2 text-primary/80'>
                            <p>
                                "I wake up some mornings and sit and have my
                                coffee and look out at my beautiful garden, and
                                I go, ’Remember how good this is. Because you
                                can lose it."
                            </p>
                        </div>
                        <span className='text-black/30 text-sm uppercase tracking-widest font-semibold block mb-[100px]'>
                            JASON JOHNSON - OWNER OF COFFEESTYLE
                        </span>
                    </>
                )}
            </div>
        </section>
    );
};

export default Blog;
