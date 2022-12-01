import COLOR from '@/common/color';
import { flexBox, typography } from '@/common/mixins';
import React from 'react';
import styled from 'styled-components';
import Image from '../Image';

export default function Person({ direction, info }: { direction: Direction; info: Person }) {
  return (
    <Wrap direction={direction}>
      <Image type="profile" size="normal" path={info.profile_path} alt={`${info.name} 이미지`} />
      <div>
        <Character>{info.character}</Character>
        <Name>{info.name}</Name>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div<{ direction: Direction }>`
  ${({ direction }) => `
    ${flexBox({
      direction: direction,
      alignItems: direction === 'column' ? 'flex-start' : 'center',
    })}
    gap: ${direction === 'column' ? '10px' : '20px'}; 
  `}

  & img {
    width: ${({ direction }) => direction === 'row' && '70px'};
  }
`;

const Character = styled.p`
  ${typography({ size: 'xSmall' })}
  color: ${COLOR.GREY[200]};
  margin-bottom: 5px;
`;

const Name = styled.p`
  ${typography({ size: 'small', weight: 'bold' })}
`;

type Direction = 'column' | 'row';

type Person = {
  adult: boolean;
  gender: 0 | 1 | 2;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
