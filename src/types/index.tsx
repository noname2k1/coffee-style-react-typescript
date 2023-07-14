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

export interface Blog {
    id: string;
    title: string;
    image: string;
    description: string;
    content: string;
    [key: string]: any;
    slug: string;
    createdAt: string;
}

export enum CATEGORY_VALUES {
    ALL_PRODUCTS = 'All Products',
    COFFEE_MUGS = 'Coffee mugs',
    OTHERS = 'Others',
    PREMIUM = 'Premium',
    TEA_MUGS = 'Tea mugs',
}

export interface Category {
    id: string;
    name: string;
    title: string;
    slogan: string;
    value: CATEGORY_VALUES;
    [key: string]: any;
}

// recoil state
export interface Cart {
    items: Product[];
    isShow: boolean;
    total: number;
}
