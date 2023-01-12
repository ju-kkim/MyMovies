import MainVisual from '@/layout/MainVisual';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Inner } from '@/common/style';
import { flexBox, position, typography } from '@/common/mixins';
import { categoryText } from '@/constants/menu';
import MovieList from '@/layout/Movie/List';
import { category } from '@/utils/movie';
import { useMovieList } from '@/hook/useMovieList';

const LIST_GAP = 20;
const ITEM_COUNT = 5;

export default function Home() {
  const { list: popularMovie } = useMovieList('popular');
  const { list: nowPlayingMovie } = useMovieList('now_playing');
  const { list: upcomingMovie } = useMovieList('upcoming');
  const { list: topRatedMovie } = useMovieList('top_rated');

  const categoryMovieListProps = {
    flexGap: LIST_GAP,
    itemCount: ITEM_COUNT,
    isWrap: false,
  };

  return (
    <>
      <section>
        <MainVisual />
        <Main>
          <Inner>
            <CategoryWrap>
              <CategoryTitle category={{ text: '인기영화', path: 'popular' }} />
              <MovieList movies={popularMovie} {...categoryMovieListProps} />
            </CategoryWrap>
            <CategoryWrap>
              <CategoryTitle category={{ text: '현재상영중', path: 'now_playing' }} />
              <MovieList movies={nowPlayingMovie} {...categoryMovieListProps} />
            </CategoryWrap>
            <CategoryWrap>
              <CategoryTitle category={{ text: '개봉예정', path: 'upcoming' }} />
              <MovieList movies={upcomingMovie} {...categoryMovieListProps} />
            </CategoryWrap>
            <CategoryWrap>
              <CategoryTitle category={{ text: '높은평점', path: 'top_rated' }} />
              <MovieList movies={topRatedMovie} {...categoryMovieListProps} />
            </CategoryWrap>
          </Inner>
        </Main>
      </section>
    </>
  );
}

function CategoryTitle({ category }: { category: { text: categoryText; path: category } }) {
  return (
    <TitleBox>
      <Heading>{category.text}</Heading>
      <ViewAll to={`/${category.path}`}>view all</ViewAll>
    </TitleBox>
  );
}

const Main = styled.main`
  ${position({})}
  margin-top: -120px;
  z-index: 1;
`;

const CategoryWrap = styled.section`
  margin-bottom: 80px;
`;

const TitleBox = styled.div`
  ${flexBox({ alignItems: 'flex-end' })}
  gap: 10px;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  ${typography({ size: 'large', weight: 'bold' })}
`;

const ViewAll = styled(Link)`
  ${typography({ size: 'xSmall' })}
  align-items: baseline;
`;
