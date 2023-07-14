import { v4 as uuid } from 'uuid';
import { CATEGORY_VALUES, Category } from '../types';

export const categories: Category[] = [
    {
        id: uuid(),
        name: 'All Products',
        title: 'Our Products',
        value: CATEGORY_VALUES.ALL_PRODUCTS,
        slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: uuid(),
        name: 'Coffee mugs',
        title: 'Coffee mugs',
        value: CATEGORY_VALUES.COFFEE_MUGS,
        slogan: 'Needless to say it’s very important, content is king and people are beginning to understand that.',
    },
    {
        id: uuid(),
        name: 'Others',
        title: 'Others',
        value: CATEGORY_VALUES.OTHERS,
        slogan: 'Needless to say it’s very important, content is king and people are beginning to understand that.',
    },
    {
        id: uuid(),
        name: 'Premium',
        title: 'Premium',
        value: CATEGORY_VALUES.PREMIUM,
        slogan: 'However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase.',
    },
    {
        id: uuid(),
        name: 'Tea mugs',
        title: 'Tea mugs',
        value: CATEGORY_VALUES.TEA_MUGS,
        slogan: 'However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase.',
    },
];
