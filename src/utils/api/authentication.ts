import { setCookie } from '../cookie';
import { myFetch } from '../fetch';

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

export async function createSessionId({
  username,
  password,
}: {
  username: string | undefined;
  password: string | undefined;
}) {
  const token = await createToken();
  const request_token = await validateLogin({ username, password, token });
  const requestBody = { request_token };
  const { session_id } = await myFetch({
    method: 'POST',
    path: `authentication/session/new${process.env.REACT_APP_API_KEY}`,
    requestBody,
  });

  setCookie('sessionId', session_id, { path: '/', secure: true });
  return session_id;
}
