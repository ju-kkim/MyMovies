import React from 'react';
import Video, { afterImageStyle } from '@/components/Video';
import IconButton from '@/components/IconButton';
import COLOR from '@/common/color';
import { position, typography } from '@/common/mixins';
import styled from 'styled-components';
import { useTrendMovie } from '@/hook/useTrendMovie';
import Image from '@/components/Image';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalMode, modalMovie, modalPosition } from '@/store/modal';

export default function MainVisual() {
  const { trendMovie, trendMovieDetail } = useTrendMovie();
  const { id, mainVideo, title, logo, overview, backdrop_path } = trendMovieDetail;
  const setModalMovie = useSetRecoilState(modalMovie);
  const setModalMode = useSetRecoilState(modalMode);
  const resetModalPosition = useResetRecoilState(modalPosition);
  const detailTextStyle = typography({ size: 'medium', weight: 'bold' });

  const detailsButtonStyle = `
    padding: 6px 10px;
    border-radius: 5px;
    background: ${COLOR.GREY[200]};
  `;

  const backdropStyle = `
    width: 100%;
    ${mainVideo && afterImageStyle}
  `;

  const backdropImage = backdrop_path && (
    <Image type="backdrop" size="big" path={backdrop_path} alt={title} css={backdropStyle} />
  );

  const showDetail = () => {
    resetModalPosition();
    setModalMode('Detail');
    setModalMovie(trendMovie);
  };

  if (!id) return <Visual />;

  return (
    <Visual>
      {mainVideo ? (
        <Video
          videoKey={mainVideo}
          isMainvisual={true}
          title={title}
          backdropImage={backdropImage}
        />
      ) : (
        backdropImage
      )}
      <Info>
        {logo ? (
          <Image type="logo" size="big" path={logo} alt={title} css="max-width: 80%" />
        ) : (
          <Title>{title}</Title>
        )}
        <Overview>{overview}</Overview>
        <IconButton
          icon="info"
          iconSize="20px"
          text="상세보기"
          buttonStyle={detailsButtonStyle}
          textStyle={detailTextStyle}
          clickHandler={showDetail}
        />
      </Info>
    </Visual>
  );
}

const Visual = styled.div`
  ${position({})}
  height: 56.25vw;

  &::before {
    content: '';
    ${position({ type: 'absolute', left: '0', top: '0' })}
    width: 50%;
    height: 100%;
    background: linear-gradient(270deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.7) 100%);
    z-index: 1;
  }

  &::after {
    content: '';
    ${position({ type: 'absolute', left: '0', bottom: '0' })}
    width: 100%;
    height: 10vw;
    background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 100%);
  }
`;

const Info = styled.div`
  ${position({ type: 'absolute', top: '50%', left: '0' })}
  transform: translateY(-50%);
  width: 50%;
  max-width: 720px;
  padding-left: 50px;
  z-index: 2;
`;

const Title = styled.h2`
  ${typography({ size: 'display', weight: 'bold' })}
`;

const Overview = styled.p`
  margin: 30px 0;
  max-height: 7em;
  ${typography({ size: 'medium' })}
  display:-webkit-box;
  word-break: keep-all;
  word-wrap: break-word;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
