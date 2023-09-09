import { Link } from 'react-router-dom';
import images from '../assets/images';
import { Input, Button, SuccessMessage } from '../components/commons';
import { useState } from 'react';
import useGlobalConstans from '../hooks/useGlobalConstants';
import { useTranslation } from 'react-i18next';
const MEMBERS = [
    {
        id: 0,
        name: 'Ninh Ngọc Nam',
        image: '',
        isLeader: true,
    },
    {
        id: 1,
        name: 'Vũ Anh Tuấn',
        image: '',
        isLeader: false,
    },
    {
        id: 2,
        name: 'Hoàng Đức Việt',
        image: '',
        isLeader: false,
    },
    {
        id: 3,
        name: 'Nguyễn Văn Đại',
        image: '',
        isLeader: false,
    },
    {
        id: 4,
        name: 'Nguyễn Thành Nam',
        image: '',
        isLeader: false,
    },
];
const Footer = () => {
    const { t } = useTranslation();
    const { NAV_LIST } = useGlobalConstans();
    const [isPending, setIsPending] = useState(false);
    const [sended, setSended] = useState(false);

    const handleSend = () => {
        setIsPending(true);
        setTimeout(() => {
            setSended(true);
        }, 1000);
    };
    return (
        <footer>
            {/* black form */}
            <div
                data-aos='fade-up'
                className='bg-gray-900 px-[50px] py-[80px] mx-0 lg:mx-[30px] lg:py-[100px] text-white flex flex-col items-center dark:border-y border-border-color'
            >
                <h3 className='opacity-60 text-xs uppercase tracking-widest font-semibold'>
                    {t('footer.suggested_title')}
                </h3>
                <h1 className='text-4xl py-5'>{t('footer.contribute')}</h1>
                <div className='flex items-center flex-col sm:flex-row'>
                    {!sended && (
                        <Input
                            type='text'
                            isDark
                            size='medium'
                            placeholder='nhóm I xin chào mọi người ^_^'
                            isTransparent
                            minWidth={250}
                        />
                    )}
                    <span className='mt-4 sm:ml-4'></span>
                    <div className='w-full'>
                        {sended ? (
                            <SuccessMessage isTransparent isDark />
                        ) : (
                            <Button size='medium' hFull onClick={handleSend}>
                                {isPending
                                    ? t('common.please_wait')
                                    : t('footer.subcribe')}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            {/* footer texts */}
            <div
                className='my-[50px] flex flex-col items-center px-5 lg:px-0'
                data-aos='fade-up'
            >
                <div className='team-1 mb-10'>
                    <h1 className='text-xl font-semibold text-center mb-5'>
                        {t('footer.members')}:
                    </h1>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        {MEMBERS.map((member) => (
                            <div
                                className='flex flex-col items-center'
                                key={member.id}
                            >
                                <img src={member.image} alt={member.name} />
                                <div className=''>
                                    <span className='text-base font-semibold'>
                                        {member.name}
                                    </span>
                                    {member.isLeader && (
                                        <span className='bg-red-600 capitalize rounded-xl text-white py-1 px-4 ml-2'>
                                            {t('footer.leader')}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-primary flex lg:grid flex-col items-center lg:items-start grid-rows-1 grid-cols-4 gap-8 text-black/50 dark:text-white/50 text-sm tracking-wider'>
                    <div className='flex justify-center flex-col items-center'>
                        <img
                            src={images.logo}
                            alt='coffee-style-logo'
                            className='w-[111px] mb-2 dark:invert'
                        />
                        <div className='text-center'>
                            {t('footer.about_content')}
                        </div>
                        <div className='flex'>
                            <span className='hover:text-primary text-xs h-fit block mt-auto whitespace-nowrap'>
                                CoffeeStyle Inc. © 1996
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-3 flex-col text-center lg:text-left capitalize items-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            MENU
                        </div>
                        {NAV_LIST.map((item) =>
                            item.isShow ? (
                                <Link
                                    to={item.path}
                                    key={item.id}
                                    className='hover:text-primary text-sm inline-block'
                                >
                                    {item.name}
                                </Link>
                            ) : null,
                        )}
                    </div>

                    <div className='flex flex-col gap-3 text-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            {t('footer.follow_us')}
                        </div>
                        {[
                            'facebook.com',
                            'twitter.com',
                            'instagram.com',
                            'pinterest.com',
                        ].map((item) => (
                            <a
                                href={`https://${item}`}
                                target='_blank'
                                key={item}
                                className='hover:text-primary text-xs inline-block capitalize'
                            >
                                {item.split('.')[0]}
                            </a>
                        ))}
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='tracking-widest text-xs font-semibold'>
                            {t('footer.contact_us')}
                        </div>
                        <h3 className='mb-auto mt-5 text-center'>
                            {t('footer.contact_content')}
                        </h3>
                        <h2 className='text-gray-900 dark:text-white text-2xl mb-5'>
                            us@coffeestyle.io
                        </h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
