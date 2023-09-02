import { Post, CATEGORY_VALUES, HeaderNav } from '../types';
import images from '../assets/images';
import { v4 as uuid } from 'uuid';
import routes from '../config/routes';

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
    {
        id: 'login',
        name: 'login',
        path: routes.auth,
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

export const fakeDatas4: Post[] = [
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
        category: CATEGORY_VALUES.BARISTA,
        author: 'isabel-hamill',
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
        category: CATEGORY_VALUES.COFFEE,
        author: 'maurice-herman',
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
        category: CATEGORY_VALUES.LIFESTYLE,
        author: 'fred-gleason',
    },
    {
        id: uuid(),
        title: 'More coffee, lower death risk?',
        image: images.pic_23,
        description:
            'Eveniet itaque aperiam qui officia in ducimus. Voluptas culpa ut eligendi in. Minima est dolores dolore aut et et alias p',
        content:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        slug: 'more-coffee-lower-death-risk',
        createdAt: '2018-10-09T00:00:00.000Z',
        category: CATEGORY_VALUES.MUGS,
        author: 'fred-gleason',
    },
    {
        id: uuid(),
        title: 'Will drinking coffee prolong your life?',
        image: images.pic_24,
        description:
            'Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus',
        content:
            'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.',
        slug: 'will-drinking-coffee-prolong-your-life',
        createdAt: '2018-10-09T00:00:00.000Z',
        category: CATEGORY_VALUES.COFFEE,
        author: 'isabel-hamill',
    },
];
