export interface NavItem {
    id: string | number;
    name: string;
    path: string;
    isShow: boolean;
    [key: string]: any;
}

export interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    unit: string;
    description: string;
    quantity: number;
    details: string;
    slug: string;
    material: string;
    brand: string;
    color: string;
    hasHandle: boolean;
    diameter: number;
    height: number;
    pattern: boolean;
    oldPrice?: number;
    onSale?: boolean;
    quantityInCart: number;
    [key: string]: any;
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
    ALL_POSTS = '',
    BARISTA = 'barista',
    COFFEE = 'coffee',
    LIFESTYLE = 'lifestyle',
    MUGS = 'mugs',
}

export interface filterItem {
    id: string | number;
    title: string;
    value: string;
    children?: filterItem[];
    multiChoice?: boolean;
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

// response
export interface ResponseSuccess {
    success: boolean;
    data: any;
}
