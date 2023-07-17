import { ImageSection } from '../components/commons';
import { fakeDatas4 } from '../faker';
import images from '../assets/images';
import { Link, NavLink, useParams } from 'react-router-dom';
import routes from '../config/routes';
import { postCategories } from '../faker/category';
import { authors } from '../faker/person';
import classNames from 'classnames';
import BreadCrumb from '../components/commons/BreadCrumb';
import { useEffect } from 'react';
import HorizontalPost from '../components/blog/HorizontalPost';
const Blog = () => {
    const { category: categoryParam, slug } = useParams<{
        category?: string;
        slug?: string;
    }>();
    const matchedCategory = postCategories.find(
        (category) => category.value === categoryParam,
    );
    const matchedAuthor = authors.find((author) => author.slug === slug);
    const posts = [...fakeDatas4].filter(
        (post) =>
            (post.category === categoryParam && categoryParam) ||
            (post.author === slug && slug) ||
            (!categoryParam && !slug && post),
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryParam, slug]);
    return (
        <section className='flex justify-center mt-[100px]'>
            <div className='flex lg:w-primary flex-col items-center max-lg:text-center'>
                {/* Bread crumb */}
                {(categoryParam || slug) && (
                    <BreadCrumb firstPage={slug ? 'blog' : ''} />
                )}
                <header
                    className={classNames('pb-20 w-full', {
                        'text-center px-[30px] lg:px-40':
                            !categoryParam && !slug,
                    })}
                >
                    <h1 className='text-4xl'>
                        {matchedCategory
                            ? matchedCategory.name
                            : matchedAuthor
                            ? matchedAuthor.name
                            : 'Read coffee stories on our Blog'}
                    </h1>
                    {matchedAuthor && (
                        <span className='mt-[30px] inline-block text-xs font-semibold tracking-[0.2rem] text-black/40 uppercase'>
                            {matchedAuthor.job}
                        </span>
                    )}
                    <p
                        className={classNames(
                            'text-md text-black/60 mt-4 max-md:text-center',
                            {
                                'px-20': !categoryParam && !slug,
                            },
                        )}
                    >
                        {matchedCategory
                            ? matchedCategory.slogan
                            : matchedAuthor
                            ? matchedAuthor.description
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}
                    </p>
                </header>
                {!categoryParam && !slug && (
                    <ImageSection
                        type='blog'
                        gridCols={2}
                        items={fakeDatas4.reverse().slice(0, 2)}
                        title='featured posts'
                    />
                )}
                <div className='flex mb-[100px] flex-col lg:flex-row gap-10'>
                    <div className='lg:mr-10 max-lg:px-[30px]'>
                        <h2 className='text-[22px] capitalize flex-1 mb-10 border-b pb-4 border-border-light'>
                            Latest posts
                        </h2>
                        <div className='flex flex-col gap-y-[50px]'>
                            {posts.map((item) => (
                                <HorizontalPost
                                    key={item.id}
                                    link={`/post/${item.slug}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='lg:mr-10 max-lg:px-[30px]'>
                        <h2 className='text-[22px] capitalize mb-10 lg:w-[300px] first-line pb-4 border-b border-border-light'>
                            About us
                        </h2>
                        <div>
                            <div className='flex max-lg:justify-center'>
                                <img
                                    src={images.logo}
                                    alt='logo'
                                    className='mb-[15px] h-[24px]'
                                />
                            </div>
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

                            <h2 className='text-[22px] capitalize mb-10 lg:w-[300px] mt-10 pt-2.5 pb-4 border-b border-border-light'>
                                Authors
                            </h2>
                            <div className='flex flex-col gap-4'>
                                {authors.map((author) => (
                                    <NavLink
                                        className='flex items-center group'
                                        key={author.id}
                                        to={`/author/${author.slug}`}
                                    >
                                        <span
                                            className={classNames(
                                                'border-l-2 duration-200 pl-5 py-2 flex items-center gap-5',
                                                {
                                                    'cursor-pointer group-hover:border-primary border-border-color-lighter text-black/70 group-hover:text-black':
                                                        slug !== author.slug,
                                                    'cursor-default border-primary text-black':
                                                        slug === author.slug,
                                                },
                                            )}
                                        >
                                            <img
                                                src={author.avatar}
                                                alt={author.name}
                                                className='h-[60px] w-[60px] ml-5'
                                            />
                                            {author.name}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* block quote */}
                {!categoryParam && !slug && (
                    <>
                        <div className='max-lg:mx-[30px] blog-quote my-[30px] p-[30px] text-xl text-center border-primary border-l-2 border-b-2 text-primary/80'>
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
