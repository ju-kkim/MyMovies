import { SESSION_ID } from '@/constants/constants';
import { sessionIdStore } from '@/store/sessionId';
import { getCookie, removeCookie, setCookie } from '@/utils/cookie';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export function useSessionId() {
  const setSessionIdStore = useSetRecoilState(sessionIdStore);

  useEffect(() => {
    getCookie({ name: SESSION_ID });
  }, []);

  function getSessionId() {
    const sessionId = getCookie({ name: SESSION_ID });
    if (sessionIdStore === sessionId) return;
    setSessionIdStore(sessionId);
  }

  function setSessionId({ value, options }: { value: string; options?: {} }) {
    setCookie({ name: SESSION_ID, value, options });
    setSessionIdStore(value);
  }

  function removeSessionId() {
    removeCookie({ name: SESSION_ID });
    setSessionIdStore(undefined);
  }

  return { getSessionId, setSessionId, removeSessionId };
}
