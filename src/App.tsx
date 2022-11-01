import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Header from '@/layout/Header';
import Home from '@/page/Home';
import Login from '@/page/Login';
import NotFound from '@/page/NotFound';
import { getCookie } from './utils/cookie';
import { getAccount } from './utils/api/account';
import { useSetRecoilState } from 'recoil';
import { userStore } from './store/user';

export default function App() {
  const setUserStore = useSetRecoilState(userStore);

  useEffect(() => {
    if (!getCookie('sessionId')) return;
    (async () => {
      const user = await getAccount();
      setUserStore(user);
    })();
  }, []);

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}
