import classNames from 'classnames';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { Crumb } from '../../types';
interface Props {
    firstPage?: string;
    list?: Crumb[];
}
const BreadCrumb = ({ firstPage, list }: Props) => {
    const location = useLocation();
    const { category, slug } = useParams<{
        category?: string;
        slug?: string;
    }>();
    const pathnames = list
        ? list
        : location.pathname.split('/').filter((pathName) => pathName);
    if (firstPage) pathnames[0] = firstPage;
    return (
        <div className='flex w-full mb-5 max-lg:justify-center dark:text-white'>
            {pathnames.map((pathName, index) => (
                <div key={index} className='flex items-center uppercase py-2'>
                    <NavLink
                        to={`/${pathName.path ? pathName.path : pathName}`}
                        className={classNames(
                            'text-sm uppercase tracking-widest font-semibold',
                            {
                                'border-border-color-lighter border-b-2 hover:border-primary hover:text-primary duration-100':
                                    pathName !== category && pathName !== slug,
                                'cursor-default':
                                    pathName === category || pathName === slug,
                            },
                        )}
                    >
                        {pathName.name ? pathName.name : pathName}{' '}
                    </NavLink>
                    {index < pathnames.length - 1 && (
                        <div className='mx-2'>/</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BreadCrumb;
