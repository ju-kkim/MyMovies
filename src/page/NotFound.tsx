import { flexBox, typography } from '@/common/mixins';
import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Description>페이지를 찾을 수 없습니다.</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexBox({ direction: 'column', justifyContent: 'center' })}
  min-height: calc(100vh - 100px);
`;

const Title = styled.h2`
  ${typography({ size: 'display', weight: 'bold' })}
  margin-bottom: 20px;
`;

const Description = styled.p`
  ${typography({ size: 'xLarge' })}
`;
