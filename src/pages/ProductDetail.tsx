import { useNavigate, useParams } from 'react-router-dom';
import { Cart, Product } from '../types';
import {
    Button,
    Input,
    ItemImage,
    ImageSection,
    Banner,
} from '../components/commons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRecoilState } from 'recoil';
import { cartState } from '../store/atoms';
import { formatCurrency } from '../utils';
import { getProducts, showProduct } from '../services/productService';
import { useFirebaseAuth } from '../hooks';
import routes from '../config/routes';
import Skeleton from 'react-loading-skeleton';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product>();
    const [moreProducts, setMoreProducts] = useState<Product[]>([]);
    const [cart, setCart] = useRecoilState<Cart>(cartState);
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { user } = useFirebaseAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            try {
                const moreProds = await getProducts(0, 0, '', '', `${slug}*3`);
                const getPro = await showProduct(slug!);
                setProduct(getPro.data);
                setMoreProducts(moreProds.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [slug]);

    const handleAddToCart = (product: Product) => {
        if (Object.keys(user).length < 1) {
            navigate(routes.auth);
            return;
        }
        let quantityToAdd =
            quantity > product.quantity ? product.quantity : quantity || 1;
        if (quantity === 0) {
            setQuantity(1);
        }
        const existedProductIndex = cart.items.findIndex(
            (item) =>
                item.image === product.image && item.name === product.name,
        );
        if (existedProductIndex !== -1) {
            quantityToAdd += cart.items[existedProductIndex].quantityInCart;
            const newCart = [...cart.items];
            newCart[existedProductIndex] = {
                ...product,
                quantityInCart: quantityToAdd,
            };
            setCart({
                ...cart,
                items: newCart,
                total: newCart.reduce(
                    (acc, item) => acc + item.price * item.quantityInCart,
                    0,
                ),
            });
        } else {
            setCart((oldCart) => {
                return {
                    ...oldCart,
                    items: [
                        ...oldCart.items,
                        {
                            ...product,
                            quantityInCart: quantityToAdd,
                        },
                    ],
                    total: oldCart.total + product.price * quantityToAdd,
                };
            });
        }
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
            setCart((oldCart) => {
                return {
                    ...oldCart,
                    isShow: true,
                };
            });
        }, 500);
    };

    return (
        <section className='dark:text-white'>
            <div className='flex flex-col items-center'>
                <div className='product-wrapper w-full lg:w-primary px-5 lg:px-0 flex flex-col lg:flex-row my-[100px]'>
                    <div className='product-image w-full h-full'>
                        {product ? (
                            <ItemImage
                                item={product}
                                type='product'
                                size='medium'
                            />
                        ) : (
                            <Skeleton width={460} height={460} />
                        )}
                    </div>
                    <div className='product-detail lg:ml-[60px] text-center lg:text-left'>
                        <h1 className='text-4xl mt-[50px]'>
                            {product?.name || (
                                <Skeleton height={40} width={420} />
                            )}
                        </h1>
                        <p className='text-lg text-black/30 dark:text-white/30 mt-5 mb-6'>
                            {product?.description || (
                                <Skeleton width={420} height={120} />
                            )}
                        </p>
                        {/* price */}
                        <div className='text-gray-900/80 dark:text-gray-200/80 flex items-center justify-center'>
                            {product?.price ? (
                                <div
                                    className={classNames('uppercase', {
                                        'text-2xl text-left max-sm:w-full':
                                            !product.oldPrice,
                                        'text-3xl text-primary':
                                            product.oldPrice,
                                    })}
                                >
                                    {formatCurrency(
                                        product.price,
                                        product.unit,
                                        'de-DE',
                                    )}
                                </div>
                            ) : (
                                <Skeleton width={100} height={32} />
                            )}
                            {product?.onSale && (
                                <div className='text-sm line-through ml-4'>
                                    {formatCurrency(
                                        product.oldPrice!,
                                        product.unit,
                                        'de-DE',
                                    )}
                                </div>
                            )}
                        </div>
                        {/* quantity */}
                        <div className='flex items-center justify-center flex-col sm:flex-row mt-5'>
                            {product?.quantity ? (
                                <Input
                                    type='number'
                                    size='medium'
                                    min={1}
                                    max={product.quantity}
                                    value={quantity.toString()}
                                    onChange={(e) =>
                                        setQuantity(parseInt(e.target.value))
                                    }
                                />
                            ) : (
                                <Skeleton width={100} height={50} />
                            )}
                            <div className='sm:ml-3 mt-3 sm:mt-0 max-sm:w-full'>
                                {product ? (
                                    <Button
                                        size='medium'
                                        isDark
                                        wFull
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        {isAdding
                                            ? 'Adding to cart...'
                                            : 'Add to cart'}
                                    </Button>
                                ) : (
                                    <Skeleton width={130} height={50} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:w-primary text-center lg:text-left px-[30px] lg:px-0 gap-x-32 mb-[100px] flex-col lg:flex-row'>
                    {/* details */}
                    <div className='flex flex-col flex-1'>
                        <h3 className='primary-typo uppercase mb-5'>Details</h3>
                        <p className='font-thin text-black/50 dark:text-white/50 space-y-3 tracking-wide lg:px-[30px]'>
                            {product?.details || (
                                <Skeleton width={400} height={400} />
                            )}
                        </p>
                    </div>
                    {/* dimensions */}
                    <div className='flex flex-col flex-1 mt-[50px] lg:mt-0'>
                        <h3 className='primary-typo uppercase mb-5'>
                            Dimensions
                        </h3>
                        <ul className='lg:list-disc space-y-2'>
                            {product?.dimensions ? (
                                product.dimensions.map((item, index) => (
                                    <li
                                        key={index}
                                        className='font-thin space-y-3 whitespace-nowrap'
                                    >
                                        {index === 0 && (
                                            <span className='font-thin text-black/50 dark:text-white/50'>
                                                Lenght (in):&nbsp;
                                            </span>
                                        )}
                                        {index === 1 && (
                                            <span className='font-thin text-black/50 dark:text-white/50'>
                                                Height (in):&nbsp;
                                            </span>
                                        )}{' '}
                                        {index === 2 && (
                                            <span className='font-thin text-black/50 dark:text-white/50'>
                                                Width (in):&nbsp;
                                            </span>
                                        )}{' '}
                                        {index === 3 && (
                                            <span className='font-thin text-black/50 dark:text-white/50'>
                                                Weight (oz):&nbsp;
                                            </span>
                                        )}
                                        <span className='font-thin'>
                                            {item.toFixed(1)}
                                        </span>
                                    </li>
                                ))
                            ) : (
                                <Skeleton count={4} />
                            )}
                        </ul>
                    </div>
                </div>
                {/* banner */}
                <Banner />
                {/* list */}
                {moreProducts ? (
                    <ImageSection
                        type='product'
                        gridCols={3}
                        title='YOU MIGHT ALSO LIKE THESE'
                        items={moreProducts}
                    />
                ) : (
                    <Skeleton />
                )}
            </div>
        </section>
    );
};

export default ProductDetail;
