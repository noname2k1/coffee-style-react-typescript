import images from '../assets/images';
import { Author } from '../types';
import { v4 as uuid } from 'uuid';
export const authors: Author[] = [
    {
        id: uuid(),
        name: 'Fred Gleason',
        avatar: images.author_1,
        description:
            'Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas ut id quo.',
        slug: 'fred-gleason',
        job: 'Grand Owner',
    },
    {
        id: uuid(),
        name: 'Isabel Hamill',
        avatar: images.author_2,
        description:
            'Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas ut id quo.',
        slug: 'isabel-hamill',
        job: 'Mug Designer',
    },
    {
        id: uuid(),
        name: 'Maurice Herman',
        avatar: images.author_3,
        description:
            'Tempora vel voluptate. Aut dolorum officia qui officia nostrum porro. Voluptas ut id quo.',
        slug: 'maurice-herman',
        job: 'Grand Owner',
    },
];
