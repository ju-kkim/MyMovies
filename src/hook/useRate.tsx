import { QUERY } from '@/constants/query';
import { sessionIdStore } from '@/store/sessionId';
import { userStore } from '@/store/user';
import { myFetch } from '@/utils/fetch';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { movie } from './useMovieList';

const MIN_PAGE = 1;
const MAX_PAGE = 500;

export function useRate() {
  const sessionId = useRecoilValue(sessionIdStore);
  const user = useRecoilValue(userStore);

  const [isLastPage, setIsLastPage] = useState(false);
  const [pageCount, setPageCount] = useState(MIN_PAGE);
  const [list, setList] = useState<movie[]>([]);

  async function postRate({ movieId, rateValue, setAccountRated }: postRatePram) {
    if (!sessionId) return;
    try {
      await myFetch({
        path: `movie/${movieId}/rating`,
        method: 'POST',
        querys: [{ query: 'session_id', value: sessionId }],
        requestBody: { value: rateValue },
      });
      setAccountRated(rateValue);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteRate({ movieId, setAccountRated }: deleteRatePram) {
    if (!sessionId) return;
    try {
      await myFetch({
        path: `movie/${movieId}/rating`,
        method: 'DELETE',
        querys: [{ query: 'session_id', value: sessionId }],
      });
      setAccountRated(0);
    } catch (e) {
      console.error(e);
    }
  }

  async function getRateMovie() {
    if (!sessionId) return;
    try {
      const { page, results, total_pages } = await myFetch({
        path: `account/${user.id}/rated/movies`,
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

  return { postRate, deleteRate, getRateMovie, isLastPage, list };
}

type deleteRatePram = {
  movieId: number;
  setAccountRated: React.Dispatch<React.SetStateAction<number>>;
};

type postRatePram = deleteRatePram & {
  rateValue: number;
};
