import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();
const cartState = atom({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: {
        isShow: false,
        items: [],
        total: 0,
    }, // default value (aka initial value)
    effects_UNSTABLE: [persistAtom],
});

export default cartState;
