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
    description?: string;
    quantity: number;
    quantityInCart: number;
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

// recoil state
export interface Cart {
    items: Product[];
    isShow: boolean;
    total: number;
}
