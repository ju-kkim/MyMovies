import COLOR from '@/common/color';
import { sessionIdStore } from '@/store/sessionId';
import { myFetch } from '@/utils/fetch';
import { getAccountStates } from '@/utils/movie';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export function useRate({ movieId }: { movieId: number }) {
  const sessionId = useRecoilValue(sessionIdStore);
  const [ratedValue, setRatedValue] = useState(0);
  const rateIconStyle = ratedValue ? `color: ${COLOR.YELLOW}; opacity:1;` : '';

  useEffect(() => {
    if (!sessionId) return;
    (async () => {
      const { rated } = await getAccountStates({ movieId, sessionId });
      const value = rated ? rated.value : 0;
      setRatedValue(value);
    })();
  }, []);

  async function postRate(value: number) {
    if (!sessionId) return;
    try {
      await myFetch({
        path: `movie/${movieId}/rating`,
        method: 'POST',
        querys: [{ query: 'session_id', value: sessionId }],
        requestBody: { value },
      });
      console.log(value);
      setRatedValue(value);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteRate() {
    if (!sessionId) return;
    try {
      await myFetch({
        path: `movie/${movieId}/rating`,
        method: 'DELETE',
        querys: [{ query: 'session_id', value: sessionId }],
      });
      setRatedValue(0);
    } catch (e) {
      console.error(e);
    }
  }

  return { postRate, deleteRate, ratedValue, rateIconStyle };
}
