import { genre } from '@/components/Genres';
import { getMovieCredits, getMovieDetail } from '@/utils/movie';
import { useEffect, useState } from 'react';

export function useMovieDetail(id: number) {
  const [details, setDetails] = useState<detailsType | null>(null);
  const [credits, setCredits] = useState<creditsType | null>(null);

  useEffect(() => {
    getDetail();
  }, []);

  async function getDetail() {
    const [details, credits] = await Promise.all([getMovieDetail(id), getMovieCredits(id)]);
    setDetails(details);
    setCredits(credits);
  }

  return { details, credits };
}

type detailsType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: string;
  budget: number;
  genres: genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: company[];
  production_countries: country[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: spokenLang[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: video[];
  };
  images: {
    backdrops: img[];
    logos: img[];
    posters: img[];
  };
};

type company = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type country = {
  iso_3166_1: string;
  name: string;
};

type spokenLang = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type img = {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

type creditsType = {
  id: number;
  cast: actor[];
  crew: staff[];
};

type credit = {
  adult: boolean;
  gender: 0 | 1 | 2;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
};

export type actor = credit & {
  cast_id: number;
  character: string;
  order: number;
};

export type staff = credit & {
  department: string;
  job: string;
};
