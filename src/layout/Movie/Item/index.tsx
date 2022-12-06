import React from 'react';
import styled from 'styled-components';
import { typography } from '@/common/mixins';
import Image, { imgSize } from '@/components/Image';
import { movie } from '@/hook/useMovieList';

export default function MovieItem({ movie, imgSize }: MovieItem) {
  return (
    <ItemWrap>
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
