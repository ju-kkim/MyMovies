import COLOR from '@/common/color';
import React, { useState } from 'react';
import styled from 'styled-components';
import { flexBox, position } from '@/common/mixins';
import IconButton from '../IconButton';
import { useRate } from '@/hook/useRate';
import { accountRatedType } from '@/hook/useAccountStates';

export default function StarRate({ movieId, accountRated }: starRatePropsType) {
  const [hoverValue, setHoverValue] = useState(0);
  const { deleteRate } = useRate();

  const starProps = {
    movieId,
    hoverRate: { hoverValue, setHoverValue },
    accountRated: accountRated,
  };

  return (
    <StarWrap>
      <IconButton
        icon="rateReset"
        iconSize="15px"
        clickHandler={() => deleteRate({ movieId, setAccountRated: accountRated.set })}
      />
      <StarBox className={`${hoverValue && 'hover'}`} onMouseLeave={() => setHoverValue(0)}>
        <Star dataStarId={1} direction="left" {...starProps} />
        <Star dataStarId={2} direction="right" {...starProps} />
        <Star dataStarId={3} direction="left" {...starProps} />
        <Star dataStarId={4} direction="right" {...starProps} />
        <Star dataStarId={5} direction="left" {...starProps} />
        <Star dataStarId={6} direction="right" {...starProps} />
        <Star dataStarId={7} direction="left" {...starProps} />
        <Star dataStarId={8} direction="right" {...starProps} />
        <Star dataStarId={9} direction="left" {...starProps} />
        <Star dataStarId={10} direction="right" {...starProps} />
      </StarBox>
    </StarWrap>
  );
}

function Star({ movieId, dataStarId, direction, hoverRate, accountRated }: starPropsType) {
  const { hoverValue, setHoverValue } = hoverRate;
  const { postRate } = useRate();

  return (
    <StarBtn
      className={`${hoverValue >= dataStarId && 'on'} ${
        accountRated.state >= dataStarId && 'rated'
      } `}
      onMouseEnter={() => setHoverValue(dataStarId)}
    >
      <IconButton
        icon={`${direction}Star`}
        iconSize="10px"
        clickHandler={() =>
          postRate({ movieId: movieId, rateValue: hoverValue, setAccountRated: accountRated.set })
        }
      />
    </StarBtn>
  );
}

const StarWrap = styled.div`
  ${flexBox({})}
  gap: 5px;
  ${position({ type: 'absolute', top: 'calc(100% + 5px)', left: '50%' })}
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 5px;
  background: ${COLOR.GREY[300]};
`;

const StarBox = styled.div`
  ${position({})}
  ${flexBox({})}

  & .on {
    color: ${COLOR.YELLOW};
  }

  &:not(.hover) .rated {
    color: ${COLOR.YELLOW};
  }
`;

const StarBtn = styled.div`
  button {
    opacity: 1;
  }
`;

type starRatePropsType = {
  movieId: number;
  accountRated: accountRatedType;
};

type starPropsType = {
  dataStarId: number;
  movieId: number;
  direction: 'left' | 'right';
  hoverRate: {
    hoverValue: number;
    setHoverValue: React.Dispatch<React.SetStateAction<number>>;
  };
  accountRated: accountRatedType;
};
