import { userStore } from '@/store/user';
import { sessionIdStore } from '@/store/sessionId';
import { useRecoilValue } from 'recoil';
import { myFetch } from '@/utils/fetch';
import { useEffect, useState } from 'react';
import { getAccountStates } from '@/utils/movie';
import COLOR from '@/common/color';
import { useNavigate } from 'react-router-dom';

export function useFavorite({ movieId }: { movieId: number }) {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);
  const sessionId = useRecoilValue(sessionIdStore);
  const [isFavoriteState, setIsFavoriteState] = useState(false);
  const favoriteIconStyle = isFavoriteState ? `color: ${COLOR.YELLOW}; opacity:1;` : '';

  useEffect(() => {
    if (!sessionId) return;
    (async () => {
      const { favorite } = await getAccountStates({ movieId, sessionId });
      setIsFavoriteState(favorite);
    })();
  }, []);

  async function postFavorite({ isFavorite }: { isFavorite: boolean }) {
    if (!sessionId) return navigate('/login');

    try {
      await myFetch({
        path: `account/${user.id}/favorite`,
        method: 'POST',
        querys: [{ query: 'session_id', value: sessionId }],
        requestBody: {
          media_type: 'movie',
          media_id: movieId,
          favorite: isFavorite,
        },
      });
      setIsFavoriteState(isFavorite);
    } catch (e) {
      console.error(e);
    }
  }

  return { postFavorite, isFavoriteState, favoriteIconStyle };
}
