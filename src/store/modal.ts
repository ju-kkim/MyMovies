import { movie } from '@/hook/useMovieList';
import { atom, selector } from 'recoil';

export const modalMode = atom<modalModeType>({
  key: 'modalMode',
  default: 'Preview',
});

export const modalPosition = atom<modalPositionType>({
  key: 'modalPosiion',
  default: { x: 0, y: 0, scrollTop: 0 },
});

export const modalMovie = atom<null | movie>({
  key: 'modalMovie',
  default: null,
});

export const modal = selector({
  key: 'modal',
  get: ({ get }) => {
    const movie = get(modalMovie);
    const mode = get(modalMode);
    const position = get(modalPosition);
    return {
      mode,
      position,
      movie,
    };
  },
});

export type modalModeType = 'Preview' | 'Detail';
export type modalPositionType = { x: number; y: number; scrollTop: number };
