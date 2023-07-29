import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

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
    return { auth, isPending, user };
};

export default useFirebaseAuth;
