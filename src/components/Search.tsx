import { useEffect, useState } from 'react';
import searchIcon from '../assets/images/search.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';
import { useDebounceValue } from '../hooks';

const Search = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const debouncedValue = useDebounceValue(searchInput, 500);
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const handleSearchBar = (state?: boolean) => {
        if (state) {
            setSearchBar(state);
        } else {
            setSearchBar((prev) => !prev);
        }
    };

    useEffect(() => {
        if (searchInput.trim()) {
            (async () => {
                try {
                    const data = await getProducts(0, 10, searchInput);
                    setSearchResults(data.data);
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            setSearchResults([]);
        }
    }, [debouncedValue]);
    useEffect(() => {
        if (!searchInput.trim()) {
            setSearchResults([]);
        }
    }, [searchInput]);

    return (
        <div
            className={classNames('cursor-pointer', {
                'fixed inset-0 bg-black/30 flex justify-center': searchBar,
            })}
            onClick={() => handleSearchBar()}
        >
            <div
                className={classNames(
                    'flex items-center h-fit relative bg-transparent focus-within:border-blue-600 border border-transparent ',
                    {
                        'mt-10': searchBar,
                    },
                )}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <img
                    src={searchIcon}
                    alt='search-img'
                    className={classNames('order-1 w-8 h-8 dark:invert mx-8', {
                        'max-lg:mr-0': !searchBar,
                    })}
                    onClick={() => {
                        handleSearchBar(true);
                    }}
                />
                {searchBar && (
                    <div
                        className='bg-white'
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <input
                            autoFocus
                            type='text'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder='Type anything...'
                            className='duration-150 outline-none px-4 py-2 min-w-[50vw]'
                        />
                        {searchInput && (
                            <button
                                className='pr-4 border-r'
                                onClick={() => {
                                    setSearchInput('');
                                }}
                            >
                                x
                            </button>
                        )}
                    </div>
                )}
                {/* search results */}
                {searchResults.length > 0 && (
                    <div className='absolute bg-red top-[calc(100%+10px)] bg-white dark:bg-gray-900 w-full'>
                        <ul className='py-2 max-h-[70vh] overflow-y-auto'>
                            {searchResults.map((searchResult) => (
                                <li
                                    className='py-2 px-4 font-semibold hover:italic duration-100'
                                    key={searchResult._id}
                                >
                                    <Link
                                        to={`/product/${searchResult.slug}`}
                                        onClick={() => {
                                            setSearchBar(false);
                                            setSearchInput('');
                                        }}
                                        className='flex items-center'
                                    >
                                        <img
                                            className='w-10 h-10 rounded-full'
                                            src={searchResult.image}
                                            alt={searchResult.name}
                                        />
                                        <h3 className='ml-4'>
                                            {searchResult.name}
                                        </h3>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
