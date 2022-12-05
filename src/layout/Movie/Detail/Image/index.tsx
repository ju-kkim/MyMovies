import React from 'react';
import styled from 'styled-components';
import Image from '@/components/Image';
import { img } from '@/hook/useMovieDetail';
import { flexBox, typography } from '@/common/mixins';

const MAX_IMG_COUNT = 7;

export default function DetailImage({
  images,
  imgType,
}: {
  images: imagesType;
  imgType: 'backdrop' | 'poster';
}) {
  const showImg = images[`${imgType}s`];

  if (showImg.length === 0) return <NoneText>No Images</NoneText>;

  return (
    <ImageWrap>
      {showImg.map(
        (img, idx) =>
          idx <= MAX_IMG_COUNT && (
            <Image
              key={idx}
              type={imgType}
              size="normal"
              path={img.file_path}
              alt={`${imgType} 이미지`}
            />
          ),
      )}
    </ImageWrap>
  );
}

const NoneText = styled.p`
  margin: 20px 0;
  ${typography({ size: 'xSmall', weight: 'bold' })}
  text-align: center;
`;

const ImageWrap = styled.div`
  ${flexBox({})}
  height: 158px;
  overflow-x: scroll;

  & img {
    height: 100%;
  }
`;

type imagesType = {
  backdrops: img[];
  logos: img[];
  posters: img[];
};
