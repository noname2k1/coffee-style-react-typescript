import { useTranslation } from 'react-i18next';

const History = () => {
    const { t } = useTranslation();
    return (
        <div className='mx-6 lg:mx-[30px]'>
            <h1 className='text-2xl font-semibold'>
                {t('user-dropdown.history')}
            </h1>
        </div>
    );
};

export default History;
