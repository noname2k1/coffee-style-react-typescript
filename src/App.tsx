import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return <Outlet />;
}

export default App;
