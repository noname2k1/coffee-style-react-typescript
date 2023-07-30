const themeLoader = () => {
    const theme: {
        name: string;
        value: string;
        type: string;
    } = JSON.parse(localStorage.getItem('coffee-theme')!) || {
        name: 'light',
        value: 'bg-white',
        type: 'light',
    };
    document.documentElement.classList.add(theme.value ?? 'bg-white');
};

export default themeLoader;
