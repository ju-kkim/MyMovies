import { ERROR_MESSAGE } from '@/constants/errorMessage';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function myFetch({ path, method = 'GET', requestBody }: fetch) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };
  const body = JSON.stringify(requestBody);
  try {
    const response = await fetch(`${BASE_URL}/${path}`, { method, headers, body });
    const responseJson = await response.json();
    if (response.ok) return responseJson;
    throw new Error(`${ERROR_MESSAGE[responseJson.status_code]}`);
  } catch (error) {
    console.error(error);
  }
}

type fetch = {
  path: string;
  method?: 'GET' | 'POST' | 'DELETE';
  requestBody?: {};
};
