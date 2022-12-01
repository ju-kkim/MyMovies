import COLOR from '@/common/color';
import { flexBox, typography } from '@/common/mixins';
import React from 'react';
import styled from 'styled-components';

export default function Genres({
  genres,
  textSize,
}: {
  genres: genre[];
  textSize: 'small' | 'xSmall';
}) {
  return (
    <GenresBox>
      {genres.map((genre) => (
        <Genre key={genre.id} textSize={textSize}>
          {genre.name}
        </Genre>
      ))}
    </GenresBox>
  );
}

const GenresBox = styled.div`
  ${flexBox({})}
`;

const Genre = styled.span<{ textSize: 'small' | 'xSmall' }>`
  ${flexBox({})}

  ${({ textSize }) => typography({ size: textSize })}

  & + span::before {
    display: block;
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: 0 5px;
    background: ${COLOR.GREY[200]};
  }
`;

export type genre = {
  id: number;
  name: string;
};
