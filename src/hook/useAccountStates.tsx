import { getAccountFavoritesAndRated } from '@/utils/movie';
import { useEffect, useState } from 'react';

export default function useAccountStates({ movieId }: { movieId: number }) {
  const [accountFavorite, setFavorite] = useState(false);
  const [accountRated, setRate] = useState(0);

  useEffect(() => {
    (async () => {
      await getAccountStates({ movieId });
    })();
  }, []);

  async function getAccountStates({ movieId }: { movieId: number }) {
    const { favorite, rated } = await getAccountFavoritesAndRated({ movieId });
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
