import { v4 as uuid } from 'uuid';
import { CATEGORY_VALUES, PostCategory } from '../types';

export const postCategories: PostCategory[] = [
    {
        id: uuid(),
        name: 'All Posts',
        value: CATEGORY_VALUES.ALL_POSTS,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        id: uuid(),
        name: 'Barista',
        value: CATEGORY_VALUES.BARISTA,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        id: uuid(),
        name: 'Coffee',
        value: CATEGORY_VALUES.COFFEE,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        id: uuid(),
        name: 'Lifestyle',
        value: CATEGORY_VALUES.LIFESTYLE,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
        id: uuid(),
        name: 'Mugs',
        value: CATEGORY_VALUES.MUGS,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
];
