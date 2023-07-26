const firebaseErrorCatching = (error: any) => {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Invalid email address format.';
        case 'auth/user-disabled':
            return 'User with this email has been disabled.';
        case 'auth/user-not-found':
            return 'User with this email does not exist.';
        case 'auth/wrong-password':
            return 'Invalid password.';
        case 'auth/email-already-in-use':
            return 'Email address is already in use.';
        case 'auth/operation-not-allowed':
            return 'Email/password accounts are not enabled.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        default:
            return 'Something went wrong. Please try again.';
    }
};

export default firebaseErrorCatching;
