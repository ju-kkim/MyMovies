import React from 'react';
import Header from '@/layout/Header/index';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { modal, modalModeType } from '@/store/modal';
import { position } from '@/common/mixins';
import MovieModal from '@/layout/Movie/Modal';

export default function PageLayout({
  page,
  isModal = true,
}: {
  page: React.ReactNode;
  isModal?: boolean;
}) {
  const { movie, mode, position } = useRecoilValue(modal);
  return (
    <Wrapper modal={mode} scrollTop={position.scrollTop} isModal={isModal}>
      <Header />
      {page}
      {isModal && movie && <MovieModal />}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ modal: modalModeType; scrollTop: number; isModal: boolean }>`
  ${({ modal, scrollTop, isModal }) =>
    isModal && modal === 'Detail' && position({ type: 'fixed', top: `-${scrollTop}px` })}
  width: 100%;
`;
