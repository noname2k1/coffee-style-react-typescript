import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './config/router';
import { RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
