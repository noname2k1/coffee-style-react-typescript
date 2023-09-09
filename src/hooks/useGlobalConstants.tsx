import { useTranslation } from 'react-i18next';
import { NavItem, filterItem } from '../types';
import routes from '../config/routes';
import { useFirebaseAuth } from '.';

const useGlobalConstans = () => {
    const { t } = useTranslation();
    const { user } = useFirebaseAuth();
    const NAV_LIST: NavItem[] = [
        {
            id: 0,
            name: t('header.home'),
            path: routes.home,
            isShow: true
        },
        {
            id: 1,
            name: t('header.products'),
            path: routes.products,
            isShow: true
        },
        {
            id: 2,
            name: t('header.blog'),
            path: routes.blog,
            isShow: true
        },
        {
            id: 3,
            name: t('header.about'),
            path: routes.about,
            isShow: true
        },
        {
            id: 4,
            name: t('header.contact'),
            path: routes.contact,
            isShow: true
        },
        {
            id: 5,
            name: t('auth.login'),
            path: routes.auth,
            isShow: Object.keys(user).length < 1
        }
    ];
    const PRODUCTS_FILTER_PARENT: filterItem[] = [
        {
            id: 0,
            title: t('filter.material'),
            value: 'material',
            children: [
                {
                    id: 0,
                    title: t('filter.materials.ceramic'),
                    value: 'ceramic'
                },
                {
                    id: 1,
                    title: t('filter.materials.glass'),
                    value: 'glass'
                },
                {
                    id: 2,
                    title: t('filter.materials.crystal'),
                    value: 'crystal'
                },
                {
                    id: 3,
                    title: t('filter.materials.metal'),
                    value: 'metal'
                }
            ],
            multiChoice: false
        },
        {
            id: 1,
            title: t('filter.color'),
            value: 'color',
            children: [
                {
                    id: 0,
                    title: t('filter.colors.white'),
                    value: 'white'
                },
                {
                    id: 1,
                    title: t('filter.colors.black'),
                    value: 'black'
                },
                {
                    id: 2,
                    title: t('filter.colors.brown'),
                    value: 'brown'
                },
                {
                    id: 3,
                    title: t('filter.colors.gray'),
                    value: 'gray'
                },
                {
                    id: 4,
                    title: t('filter.colors.green'),
                    value: 'green'
                },
                {
                    id: 5,
                    title: t('filter.colors.blue'),
                    value: 'blue'
                },
                {
                    id: 6,
                    title: t('filter.colors.red'),
                    value: 'red'
                },
                {
                    id: 7,
                    title: t('filter.colors.yellow'),
                    value: 'yellow'
                },
                {
                    id: 8,
                    title: t('filter.colors.orange'),
                    value: 'orange'
                },
                {
                    id: 9,
                    title: t('filter.colors.pink'),
                    value: 'pink'
                },
                {
                    id: 10,
                    title: t('filter.colors.purple'),
                    value: 'purple'
                }
            ],
            multiChoice: false
        },
        {
            id: 2,
            title: t('filter.characteristic'),
            value: 'characteristic',
            children: [
                {
                    id: 0,
                    title: t('filter.handler'),
                    value: 'handler'
                },
                {
                    id: 1,
                    title: t('common.product.on_sale'),
                    value: 'onsale'
                },
                {
                    id: 2,
                    title: t('filter.pattern'),
                    value: 'pattern'
                }
            ],
            multiChoice: true
        }
    ];
    return {
        NAV_LIST,
        PRODUCTS_FILTER_PARENT
    };
};

export default useGlobalConstans;
