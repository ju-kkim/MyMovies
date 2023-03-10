import { movieList } from '@/hook/useMovieList';
import useSearch from '@/hook/useSearch';
import MovieList from '@/layout/Movie/List';
import SubPageLayout from '@/layout/SubPageLayout';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();
  const movieKeyword = searchParams.get('movie');
  const { getSearchMovie } = useSearch();
  const [currentPage, setCurrentPage] = useState(0);
  const [_, setIsLastPage] = useState(false);
  const [list, setList] = useState<movieList | null>(null);
  const [totalMovieCount, setTotalMovieCount] = useState(0);

  useEffect(() => {
    serach();
  }, []);

  const serach = async () => {
    const { page, isLastPage, results, total_results } = await getSearchMovie(
      movieKeyword as string,
      currentPage + 1,
    );

    setCurrentPage(page);
    setIsLastPage(isLastPage);
    setList(results);
    setTotalMovieCount(total_results);
  };

  return (
    <SubPageLayout title={`'${movieKeyword}' 검색결과 (${totalMovieCount})`}>
      {list && <MovieList movies={list} flexGap={22} itemCount={6} isWrap={true} />}
    </SubPageLayout>
  );
}
