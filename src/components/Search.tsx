import { useEffect, useState } from 'react';
import { fakeProducts, fakeDatas2 } from '../faker';
import searchIcon from '../assets/images/search.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchBar, setSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const products = [...fakeDatas2, ...fakeProducts];
    const handleSearchBar = (state?: boolean) => {
        if (state) {
            setSearchBar(state);
        } else {
            setSearchBar((prev) => !prev);
        }
    };

    useEffect(() => {
        if (searchInput.trim()) {
            setSearchResults(
                products.filter((product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()),
                ),
            );
        } else {
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
                    'flex items-center h-fit relative bg-white focus-within:border-blue-600 border border-transparent ',
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
                                <li className='py-2 px-4 font-semibold hover:italic duration-100'>
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
