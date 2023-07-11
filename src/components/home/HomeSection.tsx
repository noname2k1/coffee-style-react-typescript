import { Blog, Product as ProductType } from '../../types';
import { Post } from '../commons';
import Product from '../commons/Product';
import classNames from 'classnames';

interface Props {
    title: string;
    items: ProductType[] | Blog[];
    gridCols: 1 | 2 | 3;
    [key: string]: any;
    type: 'product' | 'blog';
}

const HomeSection = (props: Props) => {
    return (
        <section className='flex justify-center mb-[100px]'>
            <div className='w-primary'>
                <h2 className='text-center my-[100px] font-semibold uppercase text-xs tracking-widest text-black/30'>
                    {props.title}
                </h2>
                <div
                    className={classNames(
                        'grid gap-[20px] max-md:grid-cols-1 max-md:gap-[30px]',
                        {
                            'grid-cols-1': props.gridCols === 1,
                            'grid-cols-2 md:px-[30px]': props.gridCols === 2,
                            'lg:grid-cols-3 md:px-[30px] md:grid-cols-2':
                                props.gridCols === 3,
                        },
                    )}
                >
                    {props.items.map((item) => {
                        if (props.type === 'product') {
                            return (
                                <Product
                                    item={item}
                                    key={item.id}
                                    btnText={'explore mug'}
                                    cols={props.gridCols}
                                />
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

export default HomeSection;
