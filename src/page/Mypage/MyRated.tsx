import { typography } from '@/common/mixins';
import { useRate } from '@/hook/useRate';
import MovieList from '@/layout/Movie/List';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function MyRated() {
  const { getRateMovie, list } = useRate();

  useEffect(() => {
    (async () => {
      await getRateMovie();
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
