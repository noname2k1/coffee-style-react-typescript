export interface HeaderNav {
    id: string | number;
    name: string;
    path: string;
    [key: string]: any;
}

export interface Product {
    onSale?: boolean;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    id: string;
    [key: string]: any;
    unit: string;
    slug: string;
    description: string;
    quantity: number;
    quantityInCart: number;
    details: string;
    dimensions: number[];
    category: CATEGORY_VALUES;
}

export interface Post {
    id: string;
    title: string;
    image: string;
    description: string;
    content: string;
    [key: string]: any;
    slug: string;
    createdAt: string;
    category: CATEGORY_VALUES;
    author: string;
}

export enum CATEGORY_VALUES {
    ALL_PRODUCTS = 'All Products',
    COFFEE_MUGS = 'Coffee mugs',
    OTHERS = 'Others',
    PREMIUM = 'Premium',
    TEA_MUGS = 'Tea mugs',
    // post category
    ALL_POSTS = '',
    BARISTA = 'barista',
    COFFEE = 'coffee',
    LIFESTYLE = 'lifestyle',
    MUGS = 'mugs',
}

export interface Category {
    id: string;
    name: string;
    title: string;
    slogan: string;
    value: CATEGORY_VALUES;
    [key: string]: any;
}

export interface PostCategory {
    id: string;
    name: string;
    value: CATEGORY_VALUES;
    slogan: string;
    [key: string]: any;
}

export interface Author {
    id: string;
    name: string;
    avatar: string;
    [key: string]: any;
    job: string;
    description: string;
    slug: string;
}

export interface Crumb {
    name?: string;
    path?: string;
}

export interface DropdownItem {
    id: string;
    text: string;
    onClick?: () => void;
    danger?: boolean;
    separator?: boolean;
    link?: string;
    [key: string]: any;
}

// recoil state
export interface Cart {
    items: Product[];
    isShow: boolean;
    total: number;
}
