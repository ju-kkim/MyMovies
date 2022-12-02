import { IMAGE_SIZE } from '@/constants/imageSize';
import React from 'react';
import styled from 'styled-components';
import placeholderImage from '@/assets/image/placeholderImage.png';

const BASE_URL = 'https://image.tmdb.org/t/p/';

export default function Image({ type, size, path, alt, css = '' }: imageProps) {
  if (path === null) return <Img src={placeholderImage} alt="placeholder image" css={css} />;

  const imgSize = IMAGE_SIZE[type][size];
  return <Img src={BASE_URL + imgSize + path} alt={alt} css={css} />;
}

const Img = styled.img<{ css: string }>`
  display: block;
  ${({ css }) => css}
`;

type imageProps = {
  type: 'poster' | 'backdrop' | 'logo' | 'profile';
  size: imgSize;
  path: string | null;
  alt: string;
  css?: string;
};

export type imgSize = 'big' | 'normal' | 'small';
