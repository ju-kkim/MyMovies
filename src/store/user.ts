import { selector } from 'recoil';
import { sessionIdStore } from './sessionId';
import { myFetch } from '@/utils/fetch';

const defaultUserStore = {
  id: 0,
  username: '',
  profileImage: '',
  isLogin: false,
};

export const userStore = selector<useStore>({
  key: 'userStore',
  get: async ({ get }) => {
    const session_id = get(sessionIdStore);
    if (!session_id) return defaultUserStore;

    const account = await myFetch({
      path: `account${process.env.REACT_APP_API_KEY}&session_id=${session_id}`,
    });
    const { id, username } = account;
    return {
      id,
      username,
      profileImage: account.avatar.tmdb.avatar_path || '',
      isLogin: true,
    };
  },
});

type useStore = {
  id: number;
  username: string;
  profileImage: string;
  isLogin: boolean;
};
