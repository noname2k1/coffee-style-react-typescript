import { useEffect, useState } from 'react';
import { filterItem } from '../types';
import classNames from 'classnames';
import { ImageSection } from '../components/commons';
import { getProducts } from '../services/productService';
import useGlobalConstans from '../hooks/useGlobalConstants';
import { useTranslation } from 'react-i18next';

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
    const [diameter, setDiameter] = useState('');
    const [height, setHeight] = useState('');

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
    };

    const handleClear = () => {
        setSelectedItems(keys);
        setBrand('');
        setDiameter('');
        setHeight('');
    };

    // console.log(selectedItems);

    useEffect(() => {
        (async () => {
            try {
                const data = await getProducts(
                    0,
                    9,
                    '',
                    '',
                    selectedItems['material'],
                    selectedItems['color'],
                    selectedItems['characteristic'],
                    brand,
                    +diameter,
                    +height
                );
                setProductsFiltered(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [selectedItems, brand, diameter, height]);

    return (
        <section className='flex justify-center'>
            <div className='w-primary flex flex-col px-[30px] md:px-0 items-center'>
                <h1 className='text-4xl mt-[50px] dark:text-white'>
                    {t('header.products')}
                </h1>
                <div className='flex flex-col max-md:w-full justify-center items-center gap-2 md:gap-4 mb-[100px] mt-10'>
                    <div className='flex items-center gap-2 md:gap-4 pb-3 border-b-2 w-full flex-wrap justify-center'>
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
                        {/* filter by inputs */}
                        <div className='flex items-center gap-2 md:gap-4 flex-wrap'>
                            <div className='flex max-md:w-full items-center border border-black/50 dark:text-black'>
                                <input
                                    type='text'
                                    name='brand'
                                    className='outline-none flex-1 py-1.5 px-3'
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
                            <div className='flex max-md:w-full items-center border border-black/50 dark:text-black'>
                                <input
                                    type='text'
                                    name='diameter'
                                    className='outline-none flex-1 py-1.5 px-3'
                                    placeholder={t('filter.diameter')}
                                    value={diameter}
                                    onChange={(e) =>
                                        setDiameter(e.target.value)
                                    }
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
                            <div className='flex max-md:w-full items-center border border-black/50 dark:text-black'>
                                <input
                                    type='text'
                                    name='height'
                                    className='outline-none flex-1 py-1.5 px-3'
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
                        {/* clear btn */}
                        {(Object.values(selectedItems).join('') !== '' ||
                            brand ||
                            diameter ||
                            height) && (
                            <div
                                className={classNames(
                                    'cursor-pointer border text-center hover:border-red-700 hover:bg-red-700 hover:text-white py-2.5 w-full max-md:text-center dark:text-white px-4 text-xs font-semibold uppercase duration-100'
                                )}
                                onClick={handleClear}
                            >
                                X
                            </div>
                        )}
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
                    <div className='font-semibold pb-10 uppercase text-3xl'>
                        no products
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
