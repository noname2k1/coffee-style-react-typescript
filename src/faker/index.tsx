import { Blog, HeaderNav, Product } from '../types';
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
        details:
            'Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        dimensions: [45, 98, 56, 200],
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
        details: `Y'all ready for this? Get your 30oz powder coated tumblers laser etched with our limited edition designs! Stainless Steel Tumblers retain Heat & Cold - not like those junk plastic ones you see elsewhere. The tumbler is double wall vacuum insulated with a 24 hour retention ratingHolds a MASSIVE 30 ounces of hot or cold liquids! Tumbler and Lid are BPA Free - Drink in good health!`,
        dimensions: [12, 10, 20, 23],
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
        details:
            'Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        dimensions: [56, 30, 12, 12],
        description:
            'Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.',
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
        description:
            'Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.',
        details:
            'Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        dimensions: [20, 40, 30, 500],
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
        description:
            'Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.',
        dimensions: [300, 200, 200, 40],
        details:
            'Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
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
        description: 'Ducimus est ut neque sunt eum iusto. Consequatur quia.',
        dimensions: [10, 10, 10, 5],
        details:
            'Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
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
        details:
            'Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        dimensions: [20, 30, 25, 10],
        description:
            'Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates.',
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
        description:
            'Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.',
        dimensions: [12, 13, 25, 100],
        details:
            'Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
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
        dimensions: [10, 10, 10, 3],
        details:
            'Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        description: 'A et quia qui quia. Sunt tempore est sit facilis.',
    },
    {
        id: uuid(),
        name: 'Pink Premium Ceramic',
        price: 99,
        image: images.pic_1,
        unit: 'usd',
        slug: 'pink-premium-ceramic',
        quantity: 100,
        quantityInCart: 0,
        details:
            'Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        dimensions: [45, 98, 56, 200],
        description:
            'A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
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
        details:
            'A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.',
        description:
            'Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti.',
        dimensions: [8, 6, 5, 2],
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
        details: `Y'all ready for this? Get your 30oz powder coated tumblers laser etched with our limited edition designs! Stainless Steel Tumblers retain Heat & Cold - not like those junk plastic ones you see elsewhere. The tumbler is double wall vacuum insulated with a 24 hour retention ratingHolds a MASSIVE 30 ounces of hot or cold liquids! Tumbler and Lid are BPA Free - Drink in good health!`,
        dimensions: [12, 10, 20, 23],
        description:
            'The most versatile furniture system ever created. Designed to fit your life. The most versatile furniture system ever created. Designed to fit your life.',
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
