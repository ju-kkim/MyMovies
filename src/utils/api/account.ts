import { getCookie } from '../cookie';
import { myFetch } from '../fetch';

export async function getAccount() {
  const account = await myFetch({
    path: `account${process.env.REACT_APP_API_KEY}&session_id=${getCookie('sessionId')}`,
  });

  const { id, username } = account;
  const user: user = {
    id,
    username,
    profileImage: account.avatar.tmdb.avatar_path || '',
    isLogin: true,
  };

  return user;
}

type user = {
  id: number;
  username: string;
  profileImage: string;
  isLogin: boolean;
};
