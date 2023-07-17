import { Post as PostType, Product as ProductType } from '../../types';
import { Post } from '../commons';
import Product from '../commons/Product';
import classNames from 'classnames';

interface Props {
    title?: string;
    items: ProductType[] | PostType[];
    gridCols: 1 | 2 | 3;
    [key: string]: any;
    type: 'product' | 'blog';
}

const ImageSection = (props: Props) => {
    return (
        <section className='flex justify-center mb-[100px]' data-aos='fade-up'>
            <div className='lg:w-primary'>
                {props.title && (
                    <h2 className='text-center mb-[100px] font-semibold uppercase text-xs tracking-widest text-black/30'>
                        {props.title}
                    </h2>
                )}
                <div
                    className={classNames(
                        'grid gap-[20px] max-md:grid-cols-1 max-md:gap-[30px]',
                        {
                            'grid-cols-1': props.gridCols === 1,
                            'grid-cols-2': props.gridCols === 2,
                            'lg:grid-cols-3 md:grid-cols-2':
                                props.gridCols === 3,
                        },
                    )}
                >
                    {props.items.map((item, index: number) => {
                        if (props.type === 'product') {
                            if (
                                props.items.length % 2 !== 0 &&
                                index === props.items.length - 1
                            ) {
                                return (
                                    <div
                                        className='item md:col-span-2 lg:col-span-1'
                                        key={item.id}
                                    >
                                        <Product
                                            item={item}
                                            btnText={'explore mug'}
                                            cols={props.gridCols}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <Product
                                    item={item}
                                    key={item.id}
                                    btnText={'explore mug'}
                                    cols={props.gridCols}
                                />
                            );
                        }
                        if (
                            props.items.length % 2 !== 0 &&
                            index === props.items.length - 1
                        ) {
                            return (
                                <div
                                    className='md:col-span-2 lg:col-span-1'
                                    key={item.id}
                                >
                                    <Post
                                        item={item}
                                        btnText={'read the full story'}
                                        cols={props.gridCols}
                                    />
                                </div>
                            );
                        }
                        return (
                            <Post
                                item={item}
                                key={item.id}
                                btnText={'read the full story'}
                                cols={props.gridCols}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
