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
} from '../../pages';
const router = createBrowserRouter([
    {
        path: routes.home,
        element: (
            <DefaultLayout>
                <App />
            </DefaultLayout>
        ),
        children: [
            {
                path: routes.home,
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
                path: routes.about,
                element: <About />,
            },
            {
                path: routes.contact,
                element: <Contact />,
            },
        ],
    },
]);

export default router;
