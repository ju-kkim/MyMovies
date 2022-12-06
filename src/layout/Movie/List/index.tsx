import React from 'react';
import styled from 'styled-components';
import MovieItem from '../Item';
import { useMovieList } from '@/hook/useMovieList';
import { category } from '@/utils/movie';
import { flexBox } from '@/common/mixins';

export default function MovieList({
  category,
  flexGap,
  itemCount,
  isWrap = true,
}: {
  category: category;
  flexGap: number;
  itemCount: number;
  isWrap?: boolean;
}) {
  const movies = useMovieList(category);

  return (
    <List flexGap={flexGap} isWrap={isWrap}>
      {movies.list.map((movie) => (
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
