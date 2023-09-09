import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    return <div>Search : {searchParams.get('key') ?? 'empty'}</div>;
};

export default SearchPage;
