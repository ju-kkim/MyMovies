import { QUERY } from '@/constants/query';
import { myFetch } from './fetch';

export async function getMovieList({ category, page }: { category: category; page: number }) {
  const response = await myFetch({
    path: `movie/${category}`,
    querys: [
      { query: 'language', value: QUERY.language },
      { query: 'page', value: `${page}` },
      { query: 'region', value: QUERY.region },
    ],
  });

  return response;
}

export async function getMovieDetail(id: number) {
  const movie = await myFetch({
    path: `movie/${id}`,
    querys: [
      { query: 'language', value: QUERY.language },
      { query: 'append_to_response', value: `videos,images&include_image_language=ko,null` },
    ],
  });

  return movie;
}

export async function getMovieCredits(id: number) {
  const credits = await myFetch({
    path: `movie/${id}/credits`,
    querys: [{ query: 'language', value: QUERY.language }],
  });

  return credits;
}

export function findVideo(videos: video[]) {
  if (videos.length === 0) return '';

  const trailerIndex = videos.findIndex((video) => video.type === 'Trailer');

  if (trailerIndex === -1) {
    const teaser = videos.findIndex((video) => video.type === 'Teaser');
    return videos[teaser].key;
  }

  return videos[trailerIndex].key;
}

export function findLogo(logos: image[]) {
  if (logos.length === 0) return '';

  return logos[0].file_path;
}

export type category = 'popular' | 'now_playing' | 'upcoming' | 'top_rated';

type video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

type image = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
