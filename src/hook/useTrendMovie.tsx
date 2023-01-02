import { myFetch } from '@/utils/fetch';
import { findLogo, findVideo, getMovieDetail } from '@/utils/movie';
import { useEffect, useState } from 'react';
import { movie } from './useMovieList';

export function useTrendMovie() {
  const [trendMovie, setTrendMovie] = useState<movie | null>(null);
  const [trendMovieDetail, setTrendMovieDetail] = useState<trendMovie>(initTrendMovie);

  useEffect(() => {
    getTrendMovie();
  }, []);

  async function getTrendMovie() {
    const trendList = await myFetch({ path: `trending/movie/day` });
    const movie = trendList.results[0];
    const { id, title, overview, backdrop_path, videos, images } = await getMovieDetail(movie.id);
    const mainVideo = findVideo(videos.results);
    const logo = findLogo(images.logos);

    const trendMovie = {
      id,
      logo,
      title,
      overview,
      backdrop_path,
      mainVideo,
    };

    setTrendMovie(movie);
    setTrendMovieDetail(trendMovie);
  }

  return { trendMovie, trendMovieDetail };
}

const initTrendMovie = {
  id: 0,
  logo: '',
  title: '',
  overview: '',
  mainVideo: '',
  backdrop_path: '',
};

type trendMovie = {
  id: number;
  logo: string;
  title: string;
  overview: string;
  mainVideo: string;
  backdrop_path: string;
};
