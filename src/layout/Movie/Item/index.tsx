import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { typography } from '@/common/mixins';
import Image, { imgSize } from '@/components/Image';
import { movie } from '@/hook/useMovieList';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalMovie, modalPosition, modalPositionType } from '@/store/modal';
import { INNER_PADDING, PREVIEW_WIDTH } from '@/constants/constants';

const MOUSE_TIME = 500;
const windowWidth = window.innerWidth;

export default function MovieItem({ movie, imgSize }: MovieItem) {
  const [ModalMovie, setModalMovie] = useRecoilState(modalMovie);
  const setModalPosition = useSetRecoilState(modalPosition);
  let isActive = false;

  const showPreview: MouseEventHandler = ({ currentTarget }) => {
    if (ModalMovie) return;
    isActive = true;
    setTimeout(() => {
      if (!isActive) return;
      const rects = currentTarget.getBoundingClientRect();
      const scrolledTopLength = window.pageYOffset;
      const position = calcPosition({ rects, scrollTop: scrolledTopLength });
      setModalPosition(position);
      setModalMovie(movie);
    }, MOUSE_TIME);
  };

  const canclePreview = () => (isActive = false);

  return (
    <ItemWrap onMouseEnter={showPreview} onMouseLeave={canclePreview}>
      <ImageBox>
        <Image
          type="poster"
          size={imgSize}
          path={movie.poster_path}
          alt={movie.title}
          css={'width: 100%'}
        />
      </ImageBox>
      <Title>{movie.title}</Title>
    </ItemWrap>
  );
}

function calcPosition({
  rects,
  scrollTop,
}: {
  rects: DOMRect;
  scrollTop: number;
}): modalPositionType {
  const { x: pointX, y: pointY, width: itemWidth } = rects;
  const calcY = scrollTop + pointY;
  const calcX = pointX + itemWidth / 2 - PREVIEW_WIDTH / 2;

  // MovieModal 왼쪽으로 짤렸을 때
  if (calcX < INNER_PADDING) {
    return { x: pointX, y: calcY, scrollTop };
  }

  // MovieModal 오른쪽으로 짤렸을 때
  if (calcX + PREVIEW_WIDTH >= windowWidth - INNER_PADDING) {
    return { x: pointX + itemWidth - PREVIEW_WIDTH, y: calcY, scrollTop };
  }

  return { x: calcX, y: calcY, scrollTop };
}

const ItemWrap = styled.div`
  cursor: pointer;
`;

const Title = styled.p`
  margin-top: 10px;
  ${typography({ size: 'small' })}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ImageBox = styled.div`
  padding-top: 150%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    object-fit: cover;
    width: auto;
  }
`;

type MovieItem = {
  movie: movie;
  imgSize: imgSize;
};
