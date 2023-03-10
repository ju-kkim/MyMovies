import React, { useEffect } from 'react';
import { useFavorite } from '@/hook/useFavorite';
import MovieList from '@/layout/Movie/List';
import styled from 'styled-components';
import { typography } from '@/common/mixins';

export default function MyFavorite() {
  const { getFavoriteMovies, list } = useFavorite();

  useEffect(() => {
    (async () => {
      await getFavoriteMovies();
    })();
  }, []);

  return (
    <>
      {list.length === 0 ? (
        <NoMovie>No Movies</NoMovie>
      ) : (
        <MovieList movies={list} flexGap={25} itemCount={5} isWrap={true} />
      )}
    </>
  );
}

const NoMovie = styled.p`
  ${typography({ size: 'small', weight: 'bold' })}
  text-align: center;
`;
