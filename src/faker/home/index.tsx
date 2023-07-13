import { Blog, HeaderNav, Product } from '../../types';
import images from '../../assets/images';
import { v4 as uuid } from 'uuid';
import routes from '../../config/routes';

export const headerNavItems: HeaderNav[] = [
    {
        id: 0,
        name: 'home',
        path: routes.home,
    },
    {
        id: 1,
        name: 'our products',
        path: routes.products,
    },
    {
        id: 2,
        name: 'blog',
        path: routes.blog,
    },
    {
        id: 3,
        name: 'about',
        path: routes.about,
    },
    {
        id: 4,
        name: 'contact',
        path: routes.contact,
    },
];

export const fakeDatas1: Product[] = [
    {
        id: uuid(),
        name: 'Pink Premium Ceramic',
        price: 99,
        image: images.pic_1,
        unit: 'usd',
        slug: 'pink-premium-ceramic',
        quantity: 100,
        quantityInCart: 0,
        description:
            'A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
    },
    {
        id: uuid(),
        name: 'Golden Designers Mug',
        price: 50,
        oldPrice: 69,
        image: images.pic_2,
        unit: 'usd',
        onSale: true,
        slug: 'golden-designers-mug',
        quantity: 100,
        quantityInCart: 0,
        description:
            'The most versatile furniture system ever created. Designed to fit your life. The most versatile furniture system ever created. Designed to fit your life.',
    },
];

export const fakeDatas2: Product[] = [
    {
        id: uuid(),
        name: 'Red Love Cup',
        price: 25,
        oldPrice: 37,
        image: images.pic_3,
        unit: 'usd',
        onSale: true,
        slug: 'red-love-cup',
        quantity: 100,
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'black tea cup',
        price: 15,
        oldPrice: 29,
        image: images.pic_4,
        unit: 'usd',
        onSale: true,
        slug: 'black-tea-cup',
        quantity: 100,
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'B&W Essentials Mug',
        price: 19,
        quantity: 1000,
        image: images.pic_5,
        unit: 'usd',
        slug: 'bw-essentials-mug',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'Winter Style Mug',
        price: 25,
        quantity: 1000,
        image: images.pic_6,
        unit: 'usd',
        slug: 'winter-style-mug',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'Ceramic Tea',
        price: 46,
        quantity: 1000,
        image: images.pic_7,
        unit: 'usd',
        slug: 'ceramic-tea',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'No Handle Bar Cup',
        price: 34,
        quantity: 1000,
        image: images.pic_8,
        unit: 'usd',
        slug: 'no-handle-bar-cup',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'Espresso Cup by Mugs.co',
        price: 25,
        quantity: 1000,
        image: images.pic_9,
        unit: 'usd',
        slug: 'espresso-cup-by-mugsco',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'Pink Premium Ceramic',
        price: 99,
        quantity: 1000,
        image: images.pic_1,
        unit: 'usd',
        slug: 'pink-premium-ceramic',
        quantityInCart: 0,
    },
    {
        id: uuid(),
        name: 'Summer Designer Cup',
        price: 29,
        quantity: 1000,
        image: images.pic_10,
        unit: 'usd',
        slug: 'summer-designer-cup',
        quantityInCart: 0,
    },
];

export const fakeDatas3: any[] = [
    {
        id: uuid(),
        image: images.pic_11,
    },
    {
        id: uuid(),
        image: images.pic_12,
    },
    {
        id: uuid(),
        image: images.pic_13,
    },
];

export const fakeDatas4: Blog[] = [
    {
        id: uuid(),
        title: 'Health Check: why do I get a headache when I haven’t had my coffee?',
        image: images.pic_15,
        description:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        content:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        slug: 'health-check-why-do-i-get-a-headache-when-i-havent-had-my-coffee',
        createdAt: '2018-10-09T00:00:00.000Z',
    },
    {
        id: uuid(),
        title: 'How long does a cup of coffee keep you awake?',
        image: images.pic_16,
        description:
            'It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.',
        content:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        slug: 'health-check-why-do-i-get-a-headache-when-i-havent-had-my-coffee',
        createdAt: '2018-10-09T00:00:00.000Z',
    },
    {
        id: uuid(),
        title: 'Recent research suggests that heavy coffee drinkers may reap health benefits.',
        image: images.pic_17,
        description:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        content:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        slug: 'health-check-why-do-i-get-a-headache-when-i-havent-had-my-coffee',
        createdAt: '2018-10-09T00:00:00.000Z',
    },
];
