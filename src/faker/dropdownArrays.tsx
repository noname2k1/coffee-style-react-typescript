import { v4 as uuid } from 'uuid';
import { auth } from '../config/firebase';
import { DropdownItem } from '../types';

const handleLogout = () => {
    auth.signOut();
};

const userDropdown: DropdownItem[] = [
    { id: uuid(), text: 'Settings', link: '/settings' },
    {
        id: uuid(),
        text: 'Logout',
        onClick: handleLogout,
        danger: true,
        separator: true,
    },
];

export { userDropdown };
