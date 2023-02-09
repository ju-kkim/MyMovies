import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Header from '@/layout/Header/index';
import Home from '@/page/Home';
import Login from '@/page/Login';
import NotFound from '@/page/NotFound';
import { useRecoilValue } from 'recoil';
import { modal, modalModeType } from './store/modal';
import styled from 'styled-components';
import { position } from './common/mixins';
import Mypage from './page/Mypage';
import MyFavorite from './page/Mypage/MyFavorite';
import MyRated from './page/Mypage/MyRated';
import MovieModal from './layout/Movie/Modal';

export default function App() {
  const { movie, mode, position } = useRecoilValue(modal);
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Wrapper modal={mode} scrollTop={position.scrollTop}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="mypage" element={<Mypage />}>
              <Route path="favorite" element={<MyFavorite />} />
              <Route path="rated" element={<MyRated />} />
            </Route>
          </Routes>
          {movie && <MovieModal />}
        </Wrapper>
      </BrowserRouter>
    </CookiesProvider>
  );
}

const Wrapper = styled.div<{ modal: modalModeType; scrollTop: number }>`
  ${({ modal, scrollTop }) =>
    modal === 'Detail' && position({ type: 'fixed', top: `-${scrollTop}px` })}
  width: 100%;
`;
