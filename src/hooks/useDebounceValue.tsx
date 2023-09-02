import { useState, useEffect } from 'react';

const useDebounceValue = (value: string | number, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounceValue;
