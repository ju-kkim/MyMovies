import { useRate } from '@/hook/useRate';
import MovieList from '@/layout/Movie/List';
import React, { useEffect } from 'react';

export default function MyRated() {
  const { getRateMovie, list } = useRate();

  useEffect(() => {
    (async () => {
      await getRateMovie();
    })();
  }, []);

  return <MovieList movies={list} flexGap={25} itemCount={5} isWrap={true} />;
}
