import React, { useRef, useState } from 'react';
import IconButton from '../IconButton';

import styled from 'styled-components';
import { position } from '@/common/mixins';
import StarRate from './StarRate';
import { useClickOutside } from '@/hook/useClickOutside';
import { userStore } from '@/store/user';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useRate } from '@/hook/useRate';

export default function RatedButton({ movieId }: { movieId: number }) {
  const user = useRecoilValue(userStore);
  const accountRate = useRate({ movieId });
  const { rateIconStyle } = accountRate;
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const starWrapper = useRef(null);
  useClickOutside({ ref: starWrapper, callback: () => setIsActive(false) });

  const toggleRatedStar = () => {
    if (!user.isLogin) return navigate('/login');
    setIsActive(!isActive);
  };

  return (
    <RatedContainer ref={starWrapper}>
      <IconButton
        icon="circleStar"
        iconSize="17px"
        text="평가하기"
        buttonStyle={rateIconStyle}
        clickHandler={toggleRatedStar}
      />
      {isActive && <StarRate accountRate={accountRate} />}
    </RatedContainer>
  );
}

const RatedContainer = styled.div`
  ${position({})}
`;
