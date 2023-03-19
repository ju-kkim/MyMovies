import { category, getMovieList } from '@/utils/movie';

export function useMovieList() {
  async function getList(category: category, pageCount: number) {
    const { page, results, total_pages } = await getMovieList({ category, page: pageCount });

    return { movies: results, page: { current: page, total: total_pages } };
  }

  return { getList };
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
