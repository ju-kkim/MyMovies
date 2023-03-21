import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubPageLayout from '@/layout/SubPageLayout';
import NotFound from './NotFound';
import MENU from '@/constants/menu';
import MovieList from '@/layout/Movie/List';
import { useMovieList, movieList } from '@/hook/useMovieList';
import { category } from '@/utils/movie';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import Loading from '@/components/Loading';
import ObserverTarget from '@/components/ObserverTarget';

const INIT_PAGEINFO = {
  current: 0,
  total: 1,
};
type PageInfo = { current: number; total: number };

export default function SubList() {
  let { category } = useParams();
  const validateCategory = MENU.find((cat) => cat.path === category);
  if (!validateCategory) return <NotFound />;
  const { getList } = useMovieList();
  const [list, setList] = useState<movieList>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>(INIT_PAGEINFO);
  const obseverTarget = useRef<HTMLDivElement | null>(null);
  const { isLoading, setIsLoading } = useInfiniteScroll(getMoreList, obseverTarget.current);

  function getMoreList() {
    if (!validateCategory) return;
    getCategoryMovies(validateCategory.path, pageInfo.current + 1);
  }

  useEffect(() => {
    resetList();
    setIsLoading(true);
  }, [category]);

  async function getCategoryMovies(category: category, pageCount: number) {
    const { movies, page } = await getList(category, pageCount);
    setList((prevMovie) => [...prevMovie, ...movies]);
    setPageInfo(page);
  }

  function resetList() {
    setList([]);
    setPageInfo(INIT_PAGEINFO);
  }

  return (
    <SubPageLayout title={validateCategory.text}>
      <MovieList movies={list} flexGap={22} itemCount={6} />
      {pageInfo.current != pageInfo.total && <ObserverTarget targetRef={obseverTarget} />}
      {isLoading && <Loading />}
    </SubPageLayout>
  );
}
