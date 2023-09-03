import classNames from 'classnames';
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import payment_images from '../assets/images/payments';
import copy from 'copy-text-to-clipboard';
import { formatCurrency } from '../utils';

const Payment = () => {
    const { method } = useParams();
    const {
        state: { total },
    } = useLocation();
    const DETAILS = useMemo(
        () => [
            {
                id: 0,
                label: 'Nhà cung cấp',
                content: 'Coffee Style',
            },
            {
                id: 1,
                label: 'Mã đơn hàng',
                content: uuid(),
            },
            {
                id: 2,
                label: 'Mô tả',
                content:
                    'Thanh toán đơn hàng ' +
                    Math.floor(Math.random() * 100000000),
            },
            {
                id: 3,
                label: 'Số tiền',
                content: total ? formatCurrency(total, 'VND', 'de-DE') : '--',
            },
        ],
        [],
    );
    const navigate = useNavigate();
    const [minute, setMinute] = useState(9);
    const [second, setSecond] = useState(59);
    const [showInstruction, setShowInstruction] = useState(false);

    const hanldeCopyToClipboard = (content: string) => {
        copy(content);
        alert('Copied to clipboard');
    };

    const handleShowInstruction = (isShow: boolean) => {
        setShowInstruction(isShow);
    };
    useEffect(() => {
        if (second === 0) {
            setSecond(59);
            if (minute > 0) {
                setMinute((minute) => minute - 1);
            }
        }
    }, [second]);
    useEffect(() => {
        const timer = setInterval(() => {
            setSecond((second) => second - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [minute]);
    useEffect(() => {
        const favicon: (Element & { href: string }) | null =
            document.querySelector('[rel=icon]');
        if (favicon) favicon.href = payment_images.favicon_momo;
        document.title =
            'Cổng thanh toán điện tử ' +
            method?.toUpperCase().replace(/_/g, ' ');
        return () => {
            if (favicon) favicon.href = '/favicon.png';
            document.title = 'Coffee Style';
        };
    }, []);
    return (
        <div className=''>
            {/* instruction */}
            {showInstruction && (
                <div className='fixed z-10 text-white flex items-center justify-center inset-0'>
                    <div className='p-8 px-10 bg-black/80 rounded-xl'>
                        <h1 className='text-center text-xl font-semibold mb-2 relative'>
                            Hướng dẫn quét mã QR
                            <span
                                className='absolute right-0 hover:scale-125 cursor-pointer duration-150'
                                onClick={() => handleShowInstruction(false)}
                            >
                                x
                            </span>
                        </h1>
                        <div className='flex lg:max-w-[50vw] relative justify-center'>
                            <img
                                src={payment_images.qr_instruction}
                                alt='i-1'
                                className='w-1/2'
                            />
                            <img
                                src={payment_images.qr_instruction2}
                                alt='i-2'
                                className='w-1/2'
                            />
                            <img
                                src={payment_images.qr_arrow}
                                alt='arrow'
                                className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'
                            />
                        </div>
                    </div>
                </div>
            )}
            <header className='flex items-center py-3 shadow-lg px-6 lg:px-64'>
                {method === 'momo' && (
                    <span className='bg-[#a50064] w-[46px] h-[46px] flex items-center p-1 rounded-md mr-4'>
                        <svg
                            fill='#fff'
                            viewBox='0 0 96 87'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M75.5326 0C64.2284 0 55.0651 8.74843 55.0651 19.5409C55.0651 30.3333 64.2284 39.0818 75.5326 39.0818C86.8368 39.0818 96 30.3333 96 19.5409C96 8.74843 86.8368 0 75.5326 0ZM75.5326 27.8805C70.7368 27.8805 66.8403 24.1604 66.8403 19.5818C66.8403 15.0031 70.7368 11.283 75.5326 11.283C80.3283 11.283 84.2248 15.0031 84.2248 19.5818C84.2248 24.1604 80.3283 27.8805 75.5326 27.8805ZM49.1561 14.6761V39.1226H37.3809V14.5535C37.3809 12.7138 35.8394 11.2421 33.9126 11.2421C31.9857 11.2421 30.4442 12.7138 30.4442 14.5535V39.1226H18.669V14.5535C18.669 12.7138 17.1276 11.2421 15.2007 11.2421C13.2739 11.2421 11.7324 12.7138 11.7324 14.5535V39.1226H0V14.6761C0 6.58176 6.89385 0 15.372 0C18.8403 0 22.0089 1.10377 24.5781 2.9434C27.1472 1.10377 30.3586 0 33.7841 0C42.2623 0 49.1561 6.58176 49.1561 14.6761ZM75.5326 47.544C64.2284 47.544 55.0651 56.2925 55.0651 67.0849C55.0651 77.8774 64.2284 86.6258 75.5326 86.6258C86.8368 86.6258 96 77.8774 96 67.0849C96 56.2925 86.8368 47.544 75.5326 47.544ZM75.5326 75.4245C70.7368 75.4245 66.8403 71.7044 66.8403 67.1258C66.8403 62.5472 70.7368 58.827 75.5326 58.827C80.3283 58.827 84.2248 62.5472 84.2248 67.1258C84.2248 71.7044 80.3283 75.4245 75.5326 75.4245ZM49.1561 62.2201V86.6667H37.3809V62.0975C37.3809 60.2579 35.8394 58.7862 33.9126 58.7862C31.9857 58.7862 30.4442 60.2579 30.4442 62.0975V86.6667H18.669V62.0975C18.669 60.2579 17.1276 58.7862 15.2007 58.7862C13.2739 58.7862 11.7324 60.2579 11.7324 62.0975V86.6667H0V62.2201C0 54.1258 6.89385 47.544 15.372 47.544C18.8403 47.544 22.0089 48.6478 24.5781 50.4874C27.1472 48.6478 30.3158 47.544 33.7841 47.544C42.2623 47.544 49.1561 54.1258 49.1561 62.2201Z'
                                fill=''
                            ></path>
                        </svg>
                    </span>
                )}
                <span className='font-semibold text-xl'>
                    Cổng thanh toán {method?.toUpperCase().replace(/\_/g, ' ')}
                </span>
            </header>
            <div className=''>
                {minute === 0 ? (
                    <div className='flex flex-col mx-auto w-fit items-center mt-36'>
                        {method === 'momo' && (
                            <img
                                src={payment_images.momo_notfound}
                                alt='expired'
                                className='h-[250px] w-[250px]'
                            />
                        )}
                        <span className='font-semibold text-xl mt-4'>
                            Giao dịch đã hết hạn.
                        </span>
                        <button
                            className='font-semibold text-[#d82d8b] hover:text-black mt-2'
                            onClick={() => navigate(-1)}
                        >
                            Quay về
                        </button>
                    </div>
                ) : (
                    <div className='flex mt-[30px] px-6 lg:px-64 max-lg:flex-col justify-center'>
                        <div className='flex text-xl flex-col'>
                            <div className='border border-black/25 py-4 px-8 rounded-xl'>
                                <h2 className='font-semibold'>
                                    Thông tin đơn hàng
                                </h2>
                                {DETAILS.map((item) => (
                                    <div
                                        className='border-b border-black/30 py-4 last:border-none last:pb-0'
                                        key={item.id}
                                    >
                                        <h3 className='font-thin text-[15px] text-black/80'>
                                            {item.label}
                                        </h3>
                                        <span
                                            className={classNames(
                                                'font-semibold line-clamp-2 cursor-pointer',
                                                {
                                                    'text-2xl': item.id === 3,
                                                },
                                            )}
                                            title={item.content}
                                            onClick={() =>
                                                hanldeCopyToClipboard(
                                                    item.content,
                                                )
                                            }
                                        >
                                            {item.content}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col items-center w-full my-4'>
                                <div
                                    className={classNames(
                                        'w-full px-4 rounded-lg',
                                        {
                                            'text-[#d82d8b] bg-[#fff0f6]':
                                                method === 'momo',
                                            'text-[#22cda8] bg-[#d6fef4]':
                                                method === 'visa',
                                            'text-[#454fdd] bg-[#e9ebff]':
                                                method === 'debit_card' ||
                                                (method !== 'momo' &&
                                                    method !== 'visa'),
                                        },
                                    )}
                                >
                                    <p className='text-center mt-4 text-base whitespace-nowrap'>
                                        Đơn hàng sẽ hết hạn sau:
                                    </p>
                                    <div className='flex items-center gap-x-4 justify-center py-4 text-base'>
                                        <div
                                            className={classNames(
                                                'flex flex-col items-center p-2 rounded-xl',
                                                {
                                                    'bg-[#f3b4e6]':
                                                        method === 'momo',
                                                    'bg-[#96fae5]':
                                                        method === 'visa',
                                                    'bg-[#abb0fe]':
                                                        method ===
                                                            'debit_card' ||
                                                        (method !== 'momo' &&
                                                            method !== 'visa'),
                                                },
                                            )}
                                        >
                                            <span className='font-semibold'>
                                                {'0' + minute}
                                            </span>
                                            Phút
                                        </div>
                                        <div
                                            className={classNames(
                                                'flex flex-col items-center p-2 rounded-xl',
                                                {
                                                    'bg-[#f3b4e6]':
                                                        method === 'momo',
                                                    'bg-[#96fae5]':
                                                        method === 'visa',
                                                    'bg-[#abb0fe]':
                                                        method ===
                                                            'debit_card' ||
                                                        (method !== 'momo' &&
                                                            method !== 'visa'),
                                                },
                                            )}
                                        >
                                            <span className='font-semibold'>
                                                {second}
                                            </span>
                                            Giây
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className={classNames(
                                        'font-semibold  hover:text-black mt-2',
                                        {
                                            'text-[#d82d8b]': method === 'momo',
                                            'text-[#22cda8]': method === 'visa',
                                            'text-[#454fdd]':
                                                method === 'debit_card' ||
                                                (method !== 'momo' &&
                                                    method !== 'visa'),
                                        },
                                    )}
                                    onClick={() => navigate(-1)}
                                >
                                    Quay về
                                </button>
                            </div>
                        </div>
                        <div
                            className={classNames(
                                'bg-gradient-to-t flex flex-col items-center h-fit text-white py-6 px-24 lg:ml-8 rounded-lg',
                                {
                                    'from-[#c1177c] to-[#e11b90]':
                                        method === 'momo',
                                    'from-[#34b8addd] to-[#00bac0]':
                                        method === 'visa',
                                    'from-[#447cff] to-[#431be1]':
                                        method === 'debit_card' ||
                                        (method !== 'momo' &&
                                            method !== 'visa'),
                                },
                            )}
                        >
                            <h2 className='font-semibold text-xl whitespace-nowrap mb-8 text-center'>
                                Quét Mã QR để thanh toán
                            </h2>
                            <div className='bg-white relative w-[280px] h-[280px] rounded-lg flex items-center justify-center'>
                                <div className='bg-border-qrcode w-full h-full bg-no-repeat bg-center p-4'>
                                    <img
                                        src={
                                            method === 'momo'
                                                ? payment_images.my_qr
                                                : payment_images.mb_qr
                                        }
                                        alt='my-qr'
                                    />
                                    <div className='absolute top-3 left-3 right-3 w-[256px] h-[256px] overflow-hidden'>
                                        <img
                                            src={payment_images.qrcode_gradient}
                                            alt='qr-gradient'
                                            className='absolute bottom-full animate-down'
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className='my-6 text-center text-sm'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    className='jsx-d22f6bd0771ae323 mr-1 inline h-6 w-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z'
                                    />
                                </svg>
                                Sử dụng{' '}
                                {method === 'momo' ? (
                                    <strong>App MoMo</strong>
                                ) : (
                                    <strong>App Ngân Hàng</strong>
                                )}{' '}
                                hoặc ứng dụng camera hỗ trợ QR code để quét mã
                            </p>
                            <p className='whitespace-nowrap flex flex-col lg:flex-row pb-2'>
                                Gặp khó khăn khi thanh toán?{' '}
                                <button
                                    className='text-yellow-400 hover:text-black lg:ml-1'
                                    onClick={() => handleShowInstruction(true)}
                                >
                                    Xem Hướng dẫn
                                </button>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payment;
