import { useEffect, useState } from 'react';
import { filterItem } from '../types';
import classNames from 'classnames';
import { ImageSection } from '../components/commons';
import { getProducts } from '../services/productService';
import useGlobalConstans from '../hooks/useGlobalConstants';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

const Products = () => {
    const { t } = useTranslation();
    const { PRODUCTS_FILTER_PARENT } = useGlobalConstans();
    const [currentFilterItem, setCurrentFilterItem] = useState(
        PRODUCTS_FILTER_PARENT[0]
    );
    const keys = PRODUCTS_FILTER_PARENT.reduce((acc, curr) => {
        if (curr.multiChoice) {
            acc[curr.value] = [];
        } else {
            acc[curr.value] = '';
        }
        return acc;
    }, {});
    const [selectedItems, setSelectedItems] = useState(keys);
    const [brand, setBrand] = useState('');
    const [diameter, setDiameter] = useState('10');
    const [height, setHeight] = useState('10');
    const [queryAll, setQueryAll] = useState(true);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const PER_PAGE = 9;

    const [productsFiltered, setProductsFiltered] = useState([]);

    const handleParentItemChange = (filterItem: filterItem) => {
        setCurrentFilterItem(
            PRODUCTS_FILTER_PARENT.find((item) => item.id === filterItem.id)!
        );
    };

    const handleChildItemChange = (item: filterItem) => {
        setSelectedItems((prevItems) => ({
            ...prevItems,
            [currentFilterItem.value]: currentFilterItem.multiChoice
                ? prevItems[currentFilterItem.value].indexOf(item.value) === -1
                    ? [...prevItems[currentFilterItem.value], item.value]
                    : [
                          ...prevItems[currentFilterItem.value].filter(
                              (prevItem: string) => prevItem !== item.value
                          )
                      ]
                : prevItems[currentFilterItem.value] === item.value
                ? ''
                : item.value
        }));
        queryAll && setQueryAll(false);
    };

    const handleClear = () => {
        setSelectedItems(keys);
        setBrand('');
        setDiameter('10');
        setHeight('10');
        setQueryAll(true);
    };

    const handlePageChange = (event) => {
        setPage(event.selected);
    };

    // console.log(selectedItems);

    useEffect(() => {
        (async () => {
            try {
                if (queryAll) {
                    const data = await getProducts();
                    setPageCount(data.pageCount);
                    setProductsFiltered(data.data);
                }
                const data = await getProducts(
                    page * PER_PAGE,
                    PER_PAGE,
                    '',
                    '',
                    selectedItems['material'],
                    selectedItems['color'],
                    selectedItems['characteristic'],
                    brand,
                    +diameter,
                    +height
                );
                setPageCount(data.pageCount);
                setProductsFiltered(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                window.scrollTo(0, 0);
            }
        })();
    }, [selectedItems, brand, diameter, height, queryAll, page]);

    return (
        <section className='flex justify-center'>
            <div className='w-primary flex flex-col px-[30px] md:px-0 items-center'>
                <h1 className='text-4xl mt-[50px] dark:text-white'>
                    {t('header.products')}
                </h1>
                <div className='flex flex-col max-md:w-full justify-center items-center gap-2 md:gap-4 mb-[100px] mt-10'>
                    <div className='flex items-center flex-wrap gap-2 md:gap-4 pb-3 border-b-2 w-full md:flex-nowrap justify-center'>
                        <div
                            className={classNames(
                                'py-2.5 text-center whitespace-nowrap max-md:text-center dark:text-white px-4 text-xs tracking-[0.2rem] font-semibold uppercase duration-100',
                                {
                                    'cursor-pointer border border-black dark:border-white hover:text-primary':
                                        !queryAll,
                                    'cursor-default border border-primary text-primary':
                                        queryAll
                                }
                            )}
                            onClick={handleClear}
                        >
                            {t('filter.all')}
                        </div>
                        {PRODUCTS_FILTER_PARENT.map((filterItem) => (
                            <div
                                className={classNames(
                                    'py-2.5 text-center whitespace-nowrap max-md:text-center dark:text-white px-4 text-xs tracking-[0.2rem] font-semibold uppercase duration-100',
                                    {
                                        'cursor-pointer border border-black dark:border-white hover:text-primary':
                                            filterItem.id !==
                                            currentFilterItem.id,
                                        'cursor-default border border-primary text-primary':
                                            filterItem.id ===
                                            currentFilterItem.id
                                    }
                                )}
                                key={filterItem.id}
                                onClick={() =>
                                    handleParentItemChange(filterItem)
                                }
                            >
                                {filterItem.title}
                                <span className='font-black tracking-wide'>
                                    {selectedItems[filterItem.value] &&
                                    !filterItem.multiChoice
                                        ? `: ${filterItem.children?.find(
                                              (child) =>
                                                  child.value ===
                                                  selectedItems[
                                                      filterItem.value
                                                  ]
                                          )?.title}`
                                        : filterItem.multiChoice &&
                                          selectedItems[filterItem.value]
                                              .length > 0
                                        ? `: ${filterItem.children
                                              ?.filter(
                                                  (child) =>
                                                      selectedItems[
                                                          filterItem.value
                                                      ].indexOf(child.value) !==
                                                      -1
                                              )
                                              .map(
                                                  (child) => ` ${child.title}`
                                              )}`
                                        : ''}
                                </span>
                            </div>
                        ))}
                        {/* clear btn */}
                        {(Object.values(selectedItems).join('') !== '' ||
                            brand ||
                            diameter !== '10' ||
                            height !== '10') && (
                            <div
                                className={classNames(
                                    'cursor-pointer border text-center hover:border-red-700 hover:bg-red-700 hover:text-white py-2.5 max-md:text-center dark:text-white px-4 text-xs font-semibold uppercase duration-100'
                                )}
                                onClick={handleClear}
                            >
                                X
                            </div>
                        )}
                    </div>
                    {/* filter by inputs */}
                    <div className='flex items-center gap-2 md:gap-4 flex-nowrap justify-center pb-4 border-b-2'>
                        <div className='border w-32 md:w-full border-black/50 flex items-center dark:text-black'>
                            <input
                                type='text'
                                name='brand'
                                className='outline-none py-1.5 px-3 flex-1 w-1/2'
                                placeholder={t('filter.brand')}
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                            {brand && (
                                <button
                                    className='px-4 py-1.5 hover:bg-black/20'
                                    onClick={() => setBrand('')}
                                >
                                    x
                                </button>
                            )}
                        </div>
                        <div className='border w-32 md:w-full  border-black/50 flex items-center dark:text-black'>
                            <input
                                type='text'
                                name='diameter'
                                className='outline-none py-1.5 px-3 w-1/3 sm:w-1/2 flex-1'
                                placeholder={t('filter.diameter')}
                                value={diameter}
                                onChange={(e) => setDiameter(e.target.value)}
                            />
                            {diameter && (
                                <button
                                    className='px-4 py-1.5 hover:bg-black/20'
                                    onClick={() => setDiameter('')}
                                >
                                    x
                                </button>
                            )}
                        </div>
                        <div className='border w-32 md:w-full border-black/50 flex items-center dark:text-black'>
                            <input
                                type='text'
                                name='height'
                                className='outline-none py-1.5 px-3 w-1/2 flex-1'
                                placeholder={t('filter.height')}
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                            {height && (
                                <button
                                    className='px-4 py-1.5 hover:bg-black/20'
                                    onClick={() => setHeight('')}
                                >
                                    x
                                </button>
                            )}
                        </div>
                    </div>

                    <div className='flex items-center gap-2 md:gap-4 md:px-10 justify-center flex-wrap'>
                        {currentFilterItem.children?.map((item) => (
                            <div
                                className={classNames(
                                    'py-2.5 rounded-md whitespace-nowrap max-md:text-center dark:text-white px-4 text-xs tracking-[0.2rem] font-semibold uppercase duration-100',
                                    {
                                        'cursor-pointer border border-black hover:text-primary dark:border-white':
                                            item.value !==
                                                selectedItems[
                                                    currentFilterItem.value
                                                ] ||
                                            selectedItems[
                                                currentFilterItem.value
                                            ].indexOf(item.value) === -1,
                                        'cursor-default border border-primary text-primary':
                                            item.value ===
                                                selectedItems[
                                                    currentFilterItem.value
                                                ] ||
                                            selectedItems[
                                                currentFilterItem.value
                                            ].indexOf(item.value) !== -1
                                    }
                                )}
                                key={item.id}
                                onClick={() => handleChildItemChange(item)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>

                {productsFiltered.length > 0 ? (
                    <ImageSection
                        items={productsFiltered}
                        type='product'
                        gridCols={3}
                    />
                ) : (
                    <div className='font-semibold uppercase text-3xl mb-20'>
                        no products
                    </div>
                )}
                {/* Paginate */}
                {pageCount > 0 && (
                    <ReactPaginate
                        previousLabel='Previous'
                        nextLabel='Next'
                        breakLabel='...'
                        breakClassName='text-gray-600 text-sm mx-2 flex items-center'
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName='flex justify-center mt-4 mb-10 select-none'
                        pageClassName='text-sm mx-2 flex items-center px-2'
                        pageLinkClassName='p-2 rounded'
                        activeClassName='bg-gray-500 text-white cursor-default'
                        activeLinkClassName='cursor-default'
                        previousClassName='text-gray-500 flex items-center text-sm mx-2 border border-gray-500'
                        nextClassName={classNames(
                            'text-gray-500 flex items-center text-sm mx-2 border border-gray-500 hover:bg-gray-500 hover:text-white'
                        )}
                        previousLinkClassName='p-2 rounded'
                        nextLinkClassName='p-2 rounded'
                        disabledClassName='opacity-20 cursor-not-allowed hover:cursor-not-allowed'
                        disabledLinkClassName='cursor-not-allowed hover:cursor-not-allowed'
                        forcePage={page}
                    />
                )}
            </div>
        </section>
    );
};

export default Products;
