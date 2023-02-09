import React, { useEffect } from 'react';
import { useFavorite } from '@/hook/useFavorite';
import MovieList from '@/layout/Movie/List';

export default function MyFavorite() {
  const { getFavoriteMovies, list } = useFavorite();

  useEffect(() => {
    (async () => {
      await getFavoriteMovies();
    })();
  }, []);

  return <MovieList movies={list} flexGap={25} itemCount={5} isWrap={true} />;
}
