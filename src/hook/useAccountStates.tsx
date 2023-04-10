import { getAccountFavoritesAndRated } from '@/utils/movie';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sessionIdStore } from '@/store/sessionId';

export default function useAccountStates({ movieId }: { movieId: number }) {
  const [accountFavorite, setFavorite] = useState(false);
  const [accountRated, setRate] = useState(0);
  const sessionId = useRecoilValue(sessionIdStore);

  useEffect(() => {
    (async () => {
      await getAccountStates({ movieId });
    })();
  }, []);

  async function getAccountStates({ movieId }: { movieId: number }) {
    if (!sessionId) return;
    const { favorite, rated } = await getAccountFavoritesAndRated({ movieId, sessionId });
    const ratedValue = rated ? rated.value : 0;
    setFavorite(favorite);
    setRate(ratedValue);
    return { favorite, rated: ratedValue };
  }

  return {
    favorite: { state: accountFavorite, set: setFavorite },
    rated: { state: accountRated, set: setRate },
  };
}

export type accountFavoriteType = {
  state: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
};

export type accountRatedType = {
  state: number;
  set: React.Dispatch<React.SetStateAction<number>>;
};
