import { createBrowserRouter } from 'react-router-dom';
import routes from '../routes';
import App from '../../App';
import DefaultLayout from '../../layouts/DefaultLayout';
import {
    Home,
    Products,
    ProductDetail,
    Contact,
    Blog,
    About,
    Auth,
    Settings,
} from '../../pages';
import { SignIn, SignUp } from '../../components/auth';
import NotFound from '../../pages/NotFound';
import PostDetail from '../../pages/PostDetail';
import Checkout from '../../pages/Checkout';
import MomoPayment from '../../pages/MomoPayment';

const router = createBrowserRouter([
    {
        path: routes.home,
        element: (
            <DefaultLayout>
                <App />
            </DefaultLayout>
        ),
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: routes.products,
                element: <Products />,
            },
            {
                path: routes.product,
                element: <ProductDetail />,
            },
            {
                path: routes.blog,
                element: <Blog />,
            },
            {
                path: routes.blogCategory,
                element: <Blog />,
            },
            {
                path: routes.author,
                element: <Blog />,
            },
            {
                path: routes.postDetail,
                element: <PostDetail />,
            },
            {
                path: routes.about,
                element: <About />,
            },
            {
                path: routes.contact,
                element: <Contact />,
            },
            {
                path: routes.checkOut,
                element: <Checkout />,
            },
        ],
    },
    {
        path: routes.auth,
        element: <Auth />,
        children: [
            {
                index: true,
                element: <SignIn />,
            },
            {
                path: routes.signUp,
                element: <SignUp />,
            },
        ],
    },
    {
        path: routes.settings,
        element: <Settings />,
    },
    {
        path: routes.momo,
        element: <MomoPayment />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
