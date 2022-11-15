import { ERROR_MESSAGE } from '@/constants/errorMessage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function myFetch({ path, querys, method = 'GET', requestBody }: fetch) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };
  const api = `${process.env.REACT_APP_API_KEY}`;
  const queryString = querys
    ? `&${querys?.map((query) => Object.values(query).join('=')).join('&')}`
    : '';
  const query = `${api}${queryString}`;

  const body = JSON.stringify(requestBody);
  const response = await fetch(`${BASE_URL}/${path}${query}`, { method, headers, body });
  const responseJson = await response.json();
  if (response.ok) return responseJson;

  throw `${ERROR_MESSAGE[responseJson.status_code]}`;
}

type fetch = {
  path: string;
  querys?: query[];
  method?: 'GET' | 'POST' | 'DELETE';
  requestBody?: {};
};

type query = {
  query: string;
  value: string;
};
