import React from 'react';
import styled from 'styled-components';

export default function ObserverTarget({
  targetRef,
}: {
  targetRef: React.ForwardedRef<HTMLDivElement>;
}) {
  return <ObserverBox ref={targetRef} />;
}

const ObserverBox = styled.div`
  height: 50px;
`;
