import COLOR from '@/common/color';
import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return <LogindAnimation />;
}
const LogindAnimation = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin: 0 auto;

  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid ${COLOR.RED};
    border-color: ${COLOR.RED} transparent ${COLOR.RED} transparent;
    box-sizing: border-box;
    animation: loadingAnimation 1.2s linear infinite;
  }

  @keyframes loadingAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
