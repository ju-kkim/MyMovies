import COLOR from '@/common/color';
import React, { useState } from 'react';
import styled from 'styled-components';
import { flexBox, position } from '@/common/mixins';
import IconButton from '../IconButton';

export default function StarRate({ accountRate }: { accountRate: accountRateType }) {
  const [hoverValue, setHoverValue] = useState(0);

  const starProps = {
    rate: { hoverValue, setHoverValue },
    accountRate: accountRate,
  };

  return (
    <StarWrap>
      <IconButton icon="rateReset" iconSize="15px" clickHandler={() => accountRate.deleteRate()} />
      <StarBox className={`${hoverValue && 'hover'}`} onMouseLeave={() => setHoverValue(0)}>
        <Star id={1} direction="left" {...starProps} />
        <Star id={2} direction="right" {...starProps} />
        <Star id={3} direction="left" {...starProps} />
        <Star id={4} direction="right" {...starProps} />
        <Star id={5} direction="left" {...starProps} />
        <Star id={6} direction="right" {...starProps} />
        <Star id={7} direction="left" {...starProps} />
        <Star id={8} direction="right" {...starProps} />
        <Star id={9} direction="left" {...starProps} />
        <Star id={10} direction="right" {...starProps} />
      </StarBox>
    </StarWrap>
  );
}

function Star({ id, direction, rate, accountRate }: starPropsType) {
  const { postRate, ratedValue } = accountRate;
  const { hoverValue, setHoverValue } = rate;

  return (
    <StarBtn
      className={`${hoverValue >= id && 'on'} ${ratedValue >= id && 'rated'} `}
      onMouseEnter={() => setHoverValue(id)}
    >
      <IconButton icon={`${direction}Star`} iconSize="10px" clickHandler={() => postRate(id)} />
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

type accountRateType = {
  postRate: (value: number) => Promise<void>;
  deleteRate: () => Promise<void>;
  ratedValue: number;
  rateIconStyle: string;
};

type starPropsType = {
  id: number;
  direction: 'left' | 'right';
  rate: {
    hoverValue: number;
    setHoverValue: React.Dispatch<React.SetStateAction<number>>;
  };
  accountRate: accountRateType;
};
