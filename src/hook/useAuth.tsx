import { myFetch } from '@/utils/fetch';
import { useState } from 'react';
import { useSessionId } from './useSessionId';

export function useAuth() {
  const [errorMessage, setErrorMessage] = useState('');
  const { setSessionId } = useSessionId();

  async function createSessionId({
    username,
    password,
  }: {
    username: string | undefined;
    password: string | undefined;
  }) {
    try {
      const token = await createToken();
      const request_token = await validateLogin({ username, password, token });
      const requestBody = { request_token };
      const { session_id } = await myFetch({
        method: 'POST',
        path: `authentication/session/new${process.env.REACT_APP_API_KEY}`,
        requestBody,
      });
      setSessionId({ value: session_id, options: { path: '/', secure: true } });
    } catch (error) {
      if (typeof error !== 'string') {
        return console.error(error);
      }
      setErrorMessage(error);
    }
  }

  return { errorMessage, createSessionId };
}

async function createToken() {
  const { request_token } = await myFetch({
    path: `authentication/token/new${process.env.REACT_APP_API_KEY}`,
  });

  return request_token;
}

async function validateLogin({
  username,
  password,
  token,
}: {
  username: string | undefined;
  password: string | undefined;
  token: string;
}) {
  const requestBody = { username, password, request_token: token };
  const { request_token } = await myFetch({
    method: 'POST',
    path: `authentication/token/validate_with_login${process.env.REACT_APP_API_KEY}`,
    requestBody,
  });

  return request_token;
}
