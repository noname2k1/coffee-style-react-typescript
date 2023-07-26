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
} from '../../pages';
import { SignIn, SignUp } from '../../components/auth';
import NotFound from '../../pages/NotFound';
import PostDetail from '../../pages/PostDetail';
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
]);

export default router;
