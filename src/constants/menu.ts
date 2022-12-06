import { category } from '@/utils/movie';

const MENU: menu = [
  {
    text: '인기영화',
    path: 'popular',
  },
  {
    text: '현재상영중',
    path: 'now_playing',
  },
  {
    text: '개봉예정',
    path: 'upcoming',
  },
  {
    text: '높은평점',
    path: 'top_rated',
  },
];

export default MENU;

type menu = {
  text: string;
  path: category;
}[];
