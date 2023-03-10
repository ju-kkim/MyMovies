import { typography } from '@/common/mixins';
import React from 'react';
import styled from 'styled-components';

export default function SubPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin-top: 100px;
  padding: 30px 50px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  ${typography({ size: 'xLarge', weight: 'bold' })}
`;
