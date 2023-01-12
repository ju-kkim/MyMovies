import React, { useRef, useState } from 'react';
import IconButton from '../IconButton';
import styled from 'styled-components';
import { position } from '@/common/mixins';
import StarRate from './StarRate';
import { useClickOutside } from '@/hook/useClickOutside';
import { userStore } from '@/store/user';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import COLOR from '@/common/color';
import { accountRatedType } from '@/hook/useAccountStates';

export default function RatedButton({ movieId, accountRated }: rateButtonPropsType) {
  const user = useRecoilValue(userStore);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const starWrapper = useRef(null);
  const rateIconStyle = accountRated.state ? `color: ${COLOR.YELLOW}; opacity:1;` : '';

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
      {isActive && <StarRate movieId={movieId} accountRated={accountRated} />}
    </RatedContainer>
  );
}

const RatedContainer = styled.div`
  ${position({})}
`;

type rateButtonPropsType = {
  movieId: number;
  accountRated: accountRatedType;
};
