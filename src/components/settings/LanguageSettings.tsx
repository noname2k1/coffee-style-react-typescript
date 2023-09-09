import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const UserSettings = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(
        localStorage.getItem('coffee-style-language') ?? 'vi',
    );
    const [, set] = useSearchParams();

    const LANGUAGES = [
        {
            id: 0,
            code: 'en',
            displayText: t('language.en'),
        },
        {
            id: 1,
            code: 'vi',
            displayText: t('language.vi'),
        },
    ];

    const handleLanguageChange = (language: string) => {
        localStorage.setItem('coffee-style-language', language);
        setCurrentLanguage(language);
        i18n.changeLanguage(language);
        set('tab=' + t('common.language'));
    };

    return (
        <div className='dark:text-white'>
            <h1 className='text-2xl font-semibold mb-4'>
                {t('user-dropdown.settings')} - {t('common.language')}
            </h1>
            <div className='flex gap-10'>
                {LANGUAGES.map((language) => (
                    <div className='flex items-center gap-2' key={language.id}>
                        <label htmlFor={language.code}>
                            {language.displayText}
                        </label>
                        <input
                            type='radio'
                            value={language.code}
                            id={language.code}
                            name='language'
                            checked={language.code === currentLanguage}
                            onChange={() => handleLanguageChange(language.code)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSettings;
