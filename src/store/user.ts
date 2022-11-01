import { atom } from 'recoil';

const defaultUserStore = {
  id: 0,
  username: '',
  profileImage: '',
  isLogin: false,
};

export const userStore = atom({
  key: 'userStore',
  default: defaultUserStore,
});
