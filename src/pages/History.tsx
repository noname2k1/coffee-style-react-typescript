import { useTranslation } from 'react-i18next';
import { Order } from '../types';
import { useEffect, useState } from 'react';
import { getOrder } from '../services/orderService';
import { useFirebaseAuth } from '../hooks';
import Skeleton from 'react-loading-skeleton';
import { formatCurrency } from '../utils';

const History = () => {
    const { t } = useTranslation();
    const { user } = useFirebaseAuth();
    const [myOrders, setMyOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            if (Object.keys(user).length > 0) {
                try {
                    const res = await getOrder(user.uid);
                    setMyOrders(res.data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        })();
    }, [user]);
    return (
        <div className='mx-6 lg:mx-[30px]'>
            <h1 className='text-2xl font-semibold my-4'>
                {t('user-dropdown.history')}
            </h1>
            {!isLoading ? (
                <div className='flex flex-col mb-4'>
                    {myOrders.map((order) => (
                        <div
                            className='border px-4 py-2 flex flex-col'
                            key={order._id}
                        >
                            <h2 className='text-xl font-bold mb-2'>
                                Order ID: {order._id}
                            </h2>
                            <div className='flex items-center gap-10'>
                                <div>
                                    {/* <p className='text-gray-600'>
                                        User ID: {order.userid}
                                    </p> */}
                                    <p className='text-gray-600'>
                                        Địa chỉ:{' '}
                                        <span className='font-semibold'>
                                            {order.address}
                                        </span>
                                    </p>
                                    <p className='text-gray-600'>
                                        SĐT:{' '}
                                        <span className='font-semibold'>
                                            {order.contact}
                                        </span>
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-gray-600'>
                                        Phương thức:{' '}
                                        <span className='font-semibold'>
                                            {order.method}
                                        </span>
                                    </p>
                                    <p className='text-gray-600'>
                                        Thành tiền:{' '}
                                        <span className='font-semibold'>
                                            {formatCurrency(
                                                order.total,
                                                'VND',
                                                'de-DE'
                                            )}
                                        </span>
                                    </p>
                                </div>
                                <div className=''>
                                    Trạng thái:{' '}
                                    {order.isPaid ? (
                                        'Đã thanh toán'
                                    ) : order.disabled ? (
                                        <span className='bg-red-700 text-white font-semibold py-1 px-1.5'>
                                            Thanh toán thất bại
                                        </span>
                                    ) : (
                                        'Đang xử lý...'
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Skeleton width={'100%'} height={500} />
            )}
        </div>
    );
};

export default History;
