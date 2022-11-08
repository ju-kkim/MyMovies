import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import styled from 'styled-components';
import COLOR from '@/common/color';
import { typography } from '@/common/mixins';
import { userStore } from '@/store/user';
import { useAuth } from '@/hook/useAuth';
import { NAVIGATE } from '@/constants/navigate';

export default function LoginFrom() {
  const navigate = useNavigate();
  const { createSessionId, errorMessage } = useAuth();
  const user = useRecoilValueLoadable(userStore);
  const userID = useRef<HTMLInputElement | null>(null);
  const userPW = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (user.state !== 'hasValue') return;
    if (user.contents.isLogin) navigate(NAVIGATE.BACK);
  }, [user]);

  function onLogin(e: React.MouseEvent) {
    e.preventDefault();
    const username = userID.current?.value;
    const password = userPW.current?.value;

    createSessionId({ username, password });
  }

  return (
    <>
      {errorMessage ? (
        <FailedText>{errorMessage}</FailedText>
      ) : (
        <Description>TMDB 계정으로 사용하실 수 있습니다</Description>
      )}
      <LoginFromWrap>
        <LoginInput type="text" placeholder="아이디" ref={userID} />
        <LoginInput type="password" placeholder="비밀번호" ref={userPW} />
        <LoginBtn onClick={onLogin}>LOGIN</LoginBtn>
      </LoginFromWrap>
    </>
  );
}

const Description = styled.p`
  ${typography({ size: 'medium' })}
`;

const FailedText = styled(Description)`
  color: ${COLOR.YELLOW};
`;

const LoginFromWrap = styled.form`
  width: 320px;
  margin: 30px 0;
`;

const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  ${typography({ size: 'medium' })}
  color: ${COLOR.WHITE};
  background: ${COLOR.GREY[300]};
  margin-bottom: 20px;

  &::placeholder {
    color: ${COLOR.GREY[200]};
  }
  &:-ms-input-placeholder {
    color: ${COLOR.GREY[200]};
  }
  &::-ms-input-placeholder {
    color: ${COLOR.GREY[200]};
  }

  &:focus {
    background: ${COLOR.GREY[200]};

    &::placeholder {
      color: ${COLOR.GREY[300]};
    }
    &:-ms-input-placeholder {
      color: ${COLOR.GREY[300]};
    }
    &::-ms-input-placeholder {
      color: ${COLOR.GREY[300]};
    }
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 60px;
  margin: 10px 0 30px;
  border-radius: 10px;
  ${typography({ size: 'large', weight: 'bold' })}
  background: #011D33;
`;
