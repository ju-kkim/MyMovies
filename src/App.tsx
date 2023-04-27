import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import PageLayout from './layout/PageLayout';
import Home from '@/page/Home';
import Login from '@/page/Login';
import NotFound from '@/page/NotFound';
import Mypage from './page/Mypage';
import MyFavorite from './page/Mypage/MyFavorite';
import MyRated from './page/Mypage/MyRated';
import Search from './page/Search';
import SubList from './page/SubList';

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout page={<Home />} />} />
          <Route path="/movie/:category" element={<PageLayout page={<SubList />} />} />
          <Route path="/search" element={<PageLayout page={<Search />} />} />
          <Route path="login" element={<PageLayout page={<Login />} isModal={false} />} />
          <Route path="*" element={<PageLayout page={<NotFound />} isModal={false} />} />
          <Route path="mypage" element={<PageLayout page={<Mypage />} />}>
            <Route path="favorite" element={<MyFavorite />} />
            <Route path="rated" element={<MyRated />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}
