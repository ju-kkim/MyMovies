import React from 'react';
import Genres, { genre } from '@/components/Genres';
import styled from 'styled-components';
import IconButton from '@/components/IconButton';
import { flexBox, typography } from '@/common/mixins';

// TODO: 즐겨찾기, 상세보기 핸들러 추가
export default function Preview({ title, releaseDate, genres }: preview) {
  return (
    <PreviewWrap>
      <TextBox>
        <Title>{title}</Title>
        <Flex>
          <ReleaseDate>{releaseDate}</ReleaseDate>
          <Genres genres={genres} textSize="xSmall" />
        </Flex>
      </TextBox>
      <Flex>
        <IconButton icon="plus" iconSize="28px" clickHandler={() => {}} />
        <IconButton icon="downArrow" iconSize="28px" clickHandler={() => {}} />
      </Flex>
    </PreviewWrap>
  );
}

const PreviewWrap = styled.div`
  ${flexBox({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  gap: 10px;
  padding: 20px 20px 40px;
`;

const Title = styled.h2`
  ${typography({ size: 'large', weight: 'bold' })}
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const ReleaseDate = styled.span`
  ${typography({ size: 'xSmall' })}
`;

const Flex = styled.div`
  ${flexBox({})}
  gap: 10px;
`;

const TextBox = styled.div`
  width: calc(100% - 76px);
`;

type preview = {
  title: string;
  releaseDate: string;
  genres: genre[];
};
