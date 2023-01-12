import { userStore } from '@/store/user';
import { sessionIdStore } from '@/store/sessionId';
import { useRecoilValue } from 'recoil';
import { myFetch } from '@/utils/fetch';

import { useNavigate } from 'react-router-dom';
import { accountFavoriteType } from './useAccountStates';

export function useFavorite() {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);
  const sessionId = useRecoilValue(sessionIdStore);

  async function postFavorite({ movieId, accountFavorite }: postFavoriteParm) {
    if (!sessionId) return navigate('/login');

    try {
      await myFetch({
        path: `account/${user.id}/favorite`,
        method: 'POST',
        querys: [{ query: 'session_id', value: sessionId }],
        requestBody: {
          media_type: 'movie',
          media_id: movieId,
          favorite: !accountFavorite.state,
        },
      });
      accountFavorite.set(!accountFavorite.state);
    } catch (e) {
      console.error(e);
    }
  }

  return { postFavorite };
}

type postFavoriteParm = {
  movieId: number;
  accountFavorite: accountFavoriteType;
};
