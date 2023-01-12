import React from 'react';
import styled from 'styled-components';
import MovieItem from '../Item';
import { movieList } from '@/hook/useMovieList';
import { flexBox } from '@/common/mixins';

export default function MovieList({ movies, flexGap, itemCount, isWrap = true }: movieListProps) {
  return (
    <List flexGap={flexGap} isWrap={isWrap}>
      {movies.map((movie) => (
        <Item key={movie.id} flexGap={flexGap} itemCount={itemCount}>
          <MovieItem movie={movie} imgSize="normal" />
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul<{ flexGap: number; isWrap: boolean }>`
  ${flexBox({ alignItems: 'flex-end' })}
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'nowrap')};
  gap: ${({ flexGap }) => `${flexGap}px`};
  overflow: hidden;
`;

const Item = styled.li<{ flexGap: number; itemCount: number }>`
  flex-shrink: 0;
  width: ${({ itemCount, flexGap }) =>
    `calc(${100 / itemCount}% - ${(flexGap * (itemCount - 1)) / itemCount}px)`};
`;

type movieListProps = {
  movies: movieList;
  flexGap: number;
  itemCount: number;
  isWrap?: boolean;
};
