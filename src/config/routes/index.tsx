const routes = {
    home: '/',
    products: '/products',
    product: '/product/:slug',
    about: '/about',
    contact: '/contact',
    blog: '/blog',
    blogCategory: '/blog/:category',
    search: '/search',
    postDetail: '/post/:slug',
    author: '/author/:slug',
    settings: '/settings',
    history: '/history',
    historyDetail: '/history/:id',
    auth: '/auth',
    signUp: '/auth/sign-up',
    checkOut: '/check-out',
    momo: '/payment/:method'
};

export default routes;
