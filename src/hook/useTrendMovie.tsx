import { myFetch } from '@/utils/fetch';
import { findLogo, findVideo, getMovieDetail } from '@/utils/movie';
import { useEffect, useState } from 'react';

export function useTrendMovie() {
  const [trendMovie, setTrendMovie] = useState<trendMovie>(initTrendMovie);

  useEffect(() => {
    getTrendMovie();
  }, []);

  async function getTrendMovie() {
    const trendList = await myFetch({ path: `trending/movie/day` });
    const { id } = trendList.results[0];
    const { title, overview, backdrop_path, videos, images } = await getMovieDetail(id);
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

    setTrendMovie(trendMovie);
  }

  return { trendMovie };
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
