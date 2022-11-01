import React from 'react';
import LoginFrom from '@/components/LoginFrom';
import TMDB_LOGO from '@/assets/svg/TMDB_logo.svg';
import styled from 'styled-components';
import { flexBox, typography } from '@/common/mixins';

export default function Login() {
  return (
    <Wrapper>
      <Title>LOGIN</Title>
      <LoginFrom />
      <a href="https://www.themoviedb.org/" target="_blank">
        <TMDB_LOGO />
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${flexBox({ direction: 'column', justifyContent: 'center' })}
  min-height: calc(100vh - 100px);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  ${typography({ size: 'display', weight: 'bold' })}
`;
