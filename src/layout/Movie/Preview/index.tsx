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

export default function Preview({
  movie,
  accountFavorite,
}: {
  movie: movie;
  accountFavorite: {
    state: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) {
  const { id, title, release_date, genre_ids } = movie;
  const genres = findGenre(genre_ids);
  const setModalMode = useSetRecoilState(modalMode);
  const showDetail = () => setModalMode('Detail');

  return (
    <PreviewWrap>
      <Flex>
        <Title>{title}</Title>
        <Flex>
          <FavoriteButton movieId={id} accountFavorite={accountFavorite} />
          <IconButton icon="downArrow" iconSize="28px" clickHandler={showDetail} />
        </Flex>
      </Flex>
      <Flex>
        <ReleaseDate>{release_date}</ReleaseDate>
        <Genres genres={genres} textSize="xSmall" />
      </Flex>
    </PreviewWrap>
  );
}

const PreviewWrap = styled.div`
  ${flexBox({ direction: 'column', alignItems: 'stretch' })}
  gap: 10px;
  padding: 20px 20px 40px;
`;

const Title = styled.h2`
  ${typography({ size: 'large', weight: 'bold' })}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 76px);
`;

const ReleaseDate = styled.span`
  ${typography({ size: 'xSmall' })}
  flex-shrink: 0;

  &::after {
    content: '';
    display: inline-block;
    margin-left: 10px;
    width: 1px;
    height: 10px;
    vertical-align: middle;
    background: #595959;
  }
`;

const Flex = styled.div`
  ${flexBox({})}
  gap: 10px;
  flex-wrap: wrap;
`;
