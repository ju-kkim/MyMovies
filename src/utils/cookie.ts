import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setCookie({ name, value, options }: { name: string; value: string; options?: {} }) {
  return cookies.set(name, value, { ...options });
}

export function getCookie({ name }: { name: string }) {
  return cookies.get(name);
}

export function removeCookie({ name }: { name: string }) {
  return cookies.remove(name);
}
