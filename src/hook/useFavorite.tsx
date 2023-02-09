import { userStore } from '@/store/user';
import { sessionIdStore } from '@/store/sessionId';
import { useRecoilValue } from 'recoil';
import { myFetch } from '@/utils/fetch';

import { useNavigate } from 'react-router-dom';
import { accountFavoriteType } from './useAccountStates';
import { useState } from 'react';
import { movie } from './useMovieList';
import { QUERY } from '@/constants/query';

const MIN_PAGE = 1;
const MAX_PAGE = 500;

export function useFavorite() {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);
  const sessionId = useRecoilValue(sessionIdStore);

  const [isLastPage, setIsLastPage] = useState(false);
  const [pageCount, setPageCount] = useState(MIN_PAGE);
  const [list, setList] = useState<movie[]>([]);

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

  async function getFavoriteMovies() {
    if (!sessionId) return navigate('/login');

    try {
      const { page, results, total_pages } = await myFetch({
        path: `account/${user.id}/favorite/movies`,
        querys: [
          { query: 'session_id', value: sessionId },
          { query: 'language', value: QUERY.language },
          { query: 'page', value: `${pageCount}` },
          { query: 'region', value: QUERY.region },
        ],
      });
      setPageCount(page + 1);
      if (page === MAX_PAGE || page === total_pages) setIsLastPage(true);
      setList([...list, ...results]);
    } catch (e) {
      console.error(e);
    }
  }

  return { postFavorite, getFavoriteMovies, isLastPage, list };
}

type postFavoriteParm = {
  movieId: number;
  accountFavorite: accountFavoriteType;
};
