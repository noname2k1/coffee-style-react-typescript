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
    id: number | string;
    [key: string]: any;
    unit: string;
    slug: string;
}

export interface Blog {
    id: number | string;
    title: string;
    image: string;
    description: string;
    content: string;
    [key: string]: any;
    slug: string;
    createdAt: string;
}
