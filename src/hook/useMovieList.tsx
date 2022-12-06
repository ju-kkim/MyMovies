import { useEffect, useState } from 'react';
import { category, getMovieList } from '@/utils/movie';

const MIN_PAGE = 1;
const MAX_PAGE = 500;

export function useMovieList(category: category) {
  const [isLastPage, setIsLastPage] = useState(false);
  const [pageCount, setPageCount] = useState(MIN_PAGE);
  const [list, setList] = useState<movie[]>([]);

  useEffect(() => {
    if (isLastPage) return;
    getList();
  }, []);

  async function getList() {
    if (isLastPage) return;
    try {
      const { page, results, total_pages } = await getMovieList({ category, page: pageCount });
      setPageCount(page + 1);
      if (page === MAX_PAGE || page === total_pages) setIsLastPage(true);
      setList([...list, ...results]);
    } catch (e) {
      console.error(e);
    }
  }

  return { list, getList };
}

export type movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type movieList = movie[];
