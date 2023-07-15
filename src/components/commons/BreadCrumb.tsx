import classNames from 'classnames';
import { NavLink, useLocation, useParams } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();
    const { category } = useParams<{ category: string }>();
    const pathnames = location.pathname
        .split('/')
        .filter((pathName) => pathName);

    return (
        <div className='flex w-full ml-[30px] mb-5'>
            {pathnames.map((pathName, index) => (
                <div key={index} className='flex items-center uppercase py-2'>
                    <NavLink
                        to={`/${pathName}`}
                        className={classNames(
                            'text-sm uppercase tracking-widest font-semibold',
                            {
                                'border-border-color-lighter border-b-2 hover:border-primary hover:text-primary duration-100':
                                    pathName !== category,
                                'cursor-default': pathName === category,
                            },
                        )}
                    >
                        {pathName}{' '}
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
