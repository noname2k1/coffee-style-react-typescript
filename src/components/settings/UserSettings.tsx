import { updateProfile, updateEmail } from 'firebase/auth';
import { useState, useRef } from 'react';
import { Button, Input, Loading } from '../commons';
import { storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import images from '../../assets/images';
import classNames from 'classnames';

interface Props {
    data: any;
}

const UserSettings = ({ data }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [avatar, setAvatar] = useState<string>(data.photoURL);
    const [preview, setPreview] = useState<string>('');
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isAvatarPending, setIsAvatarPending] = useState<boolean>(true);
    const [values, setValues] = useState<{
        name: string;
        email: string;
    }>({
        name: '',
        email: '',
    });

    const handleInputImage = (e: any) => {
        if (preview) {
            URL.revokeObjectURL(preview);
        }

        const file = e.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            const imageURL = URL.createObjectURL(file);
            setPreview(imageURL);
        } else {
            setPreview('');
            if (preview) URL.revokeObjectURL(preview);
        }
    };

    const handleRemovePreview = () => {
        if (preview) URL.revokeObjectURL(preview);
        setPreview('');
        inputRef.current!.value = '';
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSaveChanges = async () => {
        if (data) {
            setIsPending(true);
            try {
                if (values.name) {
                    await updateProfile(data, { displayName: values.name });
                }
                if (preview) {
                    let blob = await fetch(preview).then((r) => r.blob());
                    const storageRef = ref(
                        storage,
                        `avatars/${data.uid}/image-${Date.now()}`,
                    );

                    const uploadTask = await uploadBytesResumable(
                        storageRef,
                        blob,
                    );
                    handleRemovePreview();
                    setIsAvatarPending(true);
                    const url = await getDownloadURL(uploadTask.ref);
                    await updateProfile(data, { photoURL: url });
                    setAvatar(url);
                }
                if (values.email) await updateEmail(data, values.email);
            } catch (error) {
                console.log(error);
            } finally {
                setIsPending(false);
                setIsAvatarPending(false);
            }
        }
        setValues({
            name: '',
            email: '',
        });
    };

    return (
        <div>
            <h1 className='text-2xl font-semibold mb-4'>User Settings</h1>
            <div className='mb-5 flex items-center flex-col lg:flex-row'>
                <span>User ID: </span>
                <span className='italic text-black/60'> {data.uid}</span>
            </div>
            {/* avatar */}
            <div className='mb-5 flex flex-col items-center'>
                <div className='flex items-center'>
                    {isAvatarPending && <Loading className='w-20 h-20' />}
                    <img
                        src={avatar}
                        alt='current-avatar'
                        className={classNames('w-20 h-20', {
                            hidden: isAvatarPending,
                        })}
                        onLoad={() => setIsAvatarPending(false)}
                        onError={(e: any) => (e.target.src = images.no_image)}
                    />
                    {preview && (
                        <div className='flex items-center'>
                            <span> {'<==>'} </span>
                            <img
                                src={preview}
                                alt='preview-avatar'
                                className='w-20 h-20'
                            />
                        </div>
                    )}
                </div>
                <div className='flex items-center mt-5 max-lg:flex-col'>
                    <input
                        type='file'
                        onInput={handleInputImage}
                        accept='image/*'
                        ref={inputRef}
                    />
                    {preview && (
                        <button
                            onClick={handleRemovePreview}
                            className='bg-red-600 text-white max-lg:mt-2 px-4 py-0.5 hover:brightness-75 rounded-sm duration-150'
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>
            <Input
                label='Name'
                size='medium'
                name='name'
                type='text'
                placeholder={data.displayName}
                onChange={handleInputChange}
                value={values.name}
                autoComplete='off'
            />
            <div className='mb-2'></div>
            <Input
                label='Email'
                size='medium'
                name='email'
                type='email'
                placeholder={data.email}
                onChange={handleInputChange}
                value={values.email}
                autoComplete='off'
            />
            <div className='mt-5 flex items-center justify-around max-lg:flex-col'>
                <Button size='medium' isDark>
                    Change Password
                </Button>
                <div className='mt-4'></div>
                <Button
                    size='medium'
                    isDark
                    disabled={
                        values.name || values.email || preview ? false : true
                    }
                    onClick={handleSaveChanges}
                >
                    Save Changes {isPending && <Loading className='ml-1' />}
                </Button>
            </div>
        </div>
    );
};

export default UserSettings;
