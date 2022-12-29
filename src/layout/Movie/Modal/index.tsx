import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import ModalPortal from '@/portal';
import Preview from '../Preview';
import Detail from '../Detail';
import Video from '@/components/Video';
import Image from '@/components/Image';
import { flexBox, position } from '@/common/mixins';
import COLOR from '@/common/color';
import { modal, modalMode, modalModeType, modalMovie, modalPositionType } from '@/store/modal';
import { DETAIL_WIDTH, PREVIEW_WIDTH } from '@/constants/constants';
import { useMovieDetail } from '@/hook/useMovieDetail';
import { findVideo } from '@/utils/movie';
import IconButton from '@/components/IconButton';
import { useClickOutside } from '@/hook/useClickOutside';

export default function MovieModal() {
  const { mode, movie, position: modalPosition } = useRecoilValue(modal);
  const resetModalMovie = useResetRecoilState(modalMovie);
  const resetModalMode = useResetRecoilState(modalMode);
  const ModalContents = useRef<HTMLDivElement>(null);
  useClickOutside({ ref: ModalContents, callback: resetModal });

  if (!movie) return null;
  const { details } = useMovieDetail(movie.id);
  if (!details) return null;
  const MainVideo = findVideo(details.videos.results);
  const MainBackdrop = (
    <Image
      type="backdrop"
      size="normal"
      path={movie.backdrop_path}
      alt={movie.title}
      css={`
        width: 100%;
        ${MainVideo && position({ type: 'absolute', left: '0', top: '0' })}
      `}
    />
  );

  function resetModal() {
    window.scrollTo(0, modalPosition.scrollTop);
    resetModalMovie();
    resetModalMode();
  }

  return (
    <ModalPortal>
      <Container>
        <ModalWrap
          ref={ModalContents}
          modalMode={mode}
          modalPosition={modalPosition}
          onMouseLeave={() => {
            if (mode === 'Detail') return;
            resetModal();
          }}
        >
          {MainVideo ? (
            <Video videoKey={MainVideo} backdropImage={MainBackdrop} title={movie.title} />
          ) : (
            MainBackdrop
          )}

          {mode === 'Preview' && <Preview movie={movie} />}
          {mode === 'Detail' && (
            <>
              <Detail movieId={movie.id} />
              <IconButton
                icon="close"
                iconSize="36px"
                clickHandler={resetModal}
                buttonStyle={CloseBtn}
              />
            </>
          )}
        </ModalWrap>
      </Container>
      {mode === 'Detail' && <Dim />}
    </ModalPortal>
  );
}

const Container = styled.div`
  ${flexBox({ justifyContent: 'center' })}
`;

const scaleAni = keyframes`
  0% {transform: scale(0.8)}
  100% {transform: scale(1)}
`;

const PreviewWrap = (modalPosition: modalPositionType) => `
  ${position({ type: 'absolute', top: `${modalPosition.y}px`, left: `${modalPosition.x}px` })}
  width: ${PREVIEW_WIDTH}px;
`;

const DetailWrap = `
  ${position({ type: 'absolute', top: '35px' })}
  width: ${DETAIL_WIDTH}px;
`;

const ModalWrap = styled.div<{ modalMode: modalModeType; modalPosition: modalPositionType }>`
  ${({ modalMode, modalPosition }) =>
    modalMode === 'Preview' ? PreviewWrap(modalPosition) : DetailWrap}
  border-radius: 5px;
  background: ${COLOR.BLACK};
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  z-index: 100;
  animation: ${scaleAni} 0.5s;
  transform-origin: top center;
  overflow: hidden;
`;

const Dim = styled.div`
  ${position({ type: 'fixed', top: '0', left: '0' })}
  width: 100%;
  height: 100%;
  background: ${COLOR.BLACK};
  opacity: 0.9;
`;

const CloseBtn = `
  ${position({ type: 'absolute', top: '10px', right: '10px' })}
  opacity: 1;
`;
