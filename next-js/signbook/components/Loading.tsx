import styled from '@emotion/styled';
import React from 'react';

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
`;

export default function Loading() {
  return <LoadingWrap>Loading signs from Hasura...</LoadingWrap>;
}
