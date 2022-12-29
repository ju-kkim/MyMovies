import React from 'react';
import Genres from '@/components/Genres';
import styled from 'styled-components';
import IconButton from '@/components/IconButton';
import FavoriteButton from '@/components/FavoriteButton';
import { flexBox, typography } from '@/common/mixins';
import { useSetRecoilState } from 'recoil';
import { modalMode } from '@/store/modal';
import { movie } from '@/hook/useMovieList';
import { findGenre } from '@/utils/movie';

// TODO: 즐겨찾기
export default function Preview({ movie }: { movie: movie }) {
  const { id, title, release_date, genre_ids } = movie;
  const genres = findGenre(genre_ids);
  const setModalMode = useSetRecoilState(modalMode);
  const showDetail = () => setModalMode('Detail');

  return (
    <PreviewWrap>
      <TextBox>
        <Title>{title}</Title>
        <Flex>
          <ReleaseDate>{release_date}</ReleaseDate>
          <Genres genres={genres} textSize="xSmall" />
        </Flex>
      </TextBox>
      <Flex>
        <FavoriteButton movieId={id} />
        <IconButton icon="downArrow" iconSize="28px" clickHandler={showDetail} />
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
