import {
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from 'firebase/auth';
import { useState } from 'react';
import { Button, Input, Loading } from '../commons';
import { useFirebaseAuth } from '../../hooks';
import { toast } from 'react-toastify';
import { firebaseErrorCatching } from '../../utils';

interface Props {
    onCancel: () => void;
}

const ChangePassword = (props: Props) => {
    const { user } = useFirebaseAuth();
    const [values, setValues] = useState<{
        currentPassword: string;
        newPassword: string;
        confirmPassword: string;
    }>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleChangePassword = () => {
        setError('');
        if (
            !values.currentPassword ||
            !values.newPassword ||
            !values.confirmPassword
        ) {
            setError('Please fill all fields');
            return;
        }
        if (values.newPassword !== values.confirmPassword) {
            setError('Confirm password does not match');
            return;
        }
        setIsPending(true);
        const credential = EmailAuthProvider.credential(
            user.email,
            values.currentPassword,
        );
        reauthenticateWithCredential(user, credential)
            .then(() => {
                // User re-authenticated.
                updatePassword(user, values.newPassword)
                    .then(() => {
                        // Update successful.
                        toast.success('Password changed successfully');
                        props.onCancel();
                    })
                    .catch((error) => {
                        // An error ocurred
                        // ...
                        console.log(error);
                        toast.error('Something went wrong, please try again');
                    });
            })
            .catch((error) => {
                setError(firebaseErrorCatching(error));
            })
            .finally(() => {
                setIsPending(false);
            });
    };

    return (
        <div className='py-4'>
            <Input
                label='Current Password'
                size='medium'
                name='currentPassword'
                type='text'
                placeholder='Enter current password'
                onChange={handleInputChange}
                value={values.currentPassword}
                autoComplete='off'
            />
            <div className='mb-2'></div>
            <Input
                label='New Password'
                size='medium'
                name='newPassword'
                type='email'
                placeholder='Enter new password'
                onChange={handleInputChange}
                value={values.newPassword}
                autoComplete='off'
            />
            <div className='mb-2'></div>
            <Input
                label='Confirm Password'
                size='medium'
                name='confirmPassword'
                type='email'
                placeholder='Confirm new password'
                onChange={handleInputChange}
                value={values.confirmPassword}
                autoComplete='off'
            />
            {error && (
                <div className='my-2 mt-3'>
                    <p className='text-red-500'>{error}</p>
                </div>
            )}
            <div className='mt-4 flex justify-between'>
                <Button size='medium' isDark onClick={props.onCancel}>
                    cancel
                </Button>
                <Button size='medium' isDark onClick={handleChangePassword}>
                    save {isPending && <Loading className='ml-1' />}
                </Button>
            </div>
        </div>
    );
};

export default ChangePassword;
