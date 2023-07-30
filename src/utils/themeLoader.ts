const themeLoader = () => {
    const theme: {
        name: string;
        value: string;
        type: 'light' | 'dark' | 'background';
    } = JSON.parse(localStorage.getItem('coffee-theme')!) || {
        name: 'light',
        value: 'bg-white',
        type: 'light',
    };
    document.documentElement.classList.add(theme.value ?? 'bg-white');
    if (theme.type === 'dark' || theme.type === 'background') {
        document.documentElement.classList.add('dark', 'text-white');
    }
    if (theme.type === 'background') {
        document.documentElement.classList.add(
            'bg-no-repeat',
            'bg-cover',
            'bg-center',
        );
    }
};

export default themeLoader;
