import { atom } from 'recoil';

export const sessionIdStore = atom<undefined | string>({
  key: 'sessionId',
  default: undefined,
});
