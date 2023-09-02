import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';

const useFirebaseAuth = () => {
    const [user, setUser] = useState<any>({});
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsPending(false);
                setUser(user);
            } else {
                setIsPending(false);
                setUser({});
            }
        });
    }, []);
    const handleRefreshToken = async () => {
        const res: { access_token: string; refresh_token: string } =
            await axios.post(
                'https://securetoken.googleapis.com/v1/token?key=' +
                    import.meta.env.VITE_API_KEY,
                {
                    grand_type: 'refresh_token',
                    refresh_token: user.refreshToken,
                },
            );
        console.log(res);
        setUser({
            ...user,
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
        });
    };
    return { auth, isPending, user, handleRefreshToken };
};

export default useFirebaseAuth;
