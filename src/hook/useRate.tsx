import { sessionIdStore } from '@/store/sessionId';
import { myFetch } from '@/utils/fetch';
import { useRecoilValue } from 'recoil';

export function useRate() {
  const sessionId = useRecoilValue(sessionIdStore);

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

  return { postRate, deleteRate };
}

type deleteRatePram = {
  movieId: number;
  setAccountRated: React.Dispatch<React.SetStateAction<number>>;
};

type postRatePram = deleteRatePram & {
  rateValue: number;
};
