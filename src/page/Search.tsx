import { movieList } from '@/hook/useMovieList';
import useSearch from '@/hook/useSearch';
import MovieList from '@/layout/Movie/List';
import SubPageLayout from '@/layout/SubPageLayout';
import React, { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ObserverTarget from '@/components/ObserverTarget';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import Loading from '@/components/Loading';

export default function Search() {
  const [searchParams] = useSearchParams();
  const movieKeyword = searchParams.get('movie');
  const { getSearchMovie } = useSearch();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [list, setList] = useState<movieList>([]);
  const [totalMovieCount, setTotalMovieCount] = useState(0);
  const obseverTarget = useRef<HTMLDivElement | null>(null);
  const { isLoading } = useInfiniteScroll(serach, obseverTarget.current);

  async function serach() {
    const { page, isLastPage, results, total_results } = await getSearchMovie(
      movieKeyword as string,
      currentPage + 1,
    );

    setCurrentPage(page);
    setIsLastPage(isLastPage);
    setList((prevList) => [...prevList, ...results]);
    setTotalMovieCount(total_results);
  }

  return (
    <SubPageLayout title={`'${movieKeyword}' 검색결과 (${totalMovieCount})`}>
      {list && <MovieList movies={list} flexGap={22} itemCount={6} isWrap={true} />}
      {!isLastPage && <ObserverTarget targetRef={obseverTarget} />}
      {isLoading && <Loading />}
    </SubPageLayout>
  );
}
