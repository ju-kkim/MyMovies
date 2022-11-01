import COLOR from '@/common/color';
import { flexBox, typography } from '@/common/mixins';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SearchBtn from './SearchBtn';

export default function SearchFrom() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const SearchWrapper = useRef<HTMLDivElement>(null);

  function clickOutsideSearchWrap(e: MouseEvent) {
    if (SearchWrapper.current && !SearchWrapper.current.contains(e.target as Node)) {
      setIsSearchMode(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutsideSearchWrap);
    return () => {
      document.removeEventListener('mousedown', clickOutsideSearchWrap);
    };
  }, [SearchWrapper]);

  return (
    <SearchWrap ref={SearchWrapper}>
      {isSearchMode ? (
        <FormWrap>
          <SearchBtn onClick={(e) => {}} /> {/* //TODO: 검색기능 */}
          <input type="text" placeholder="검색어를 입력해주세요" />
        </FormWrap>
      ) : (
        <SearchBtn
          onClick={(e) => {
            setIsSearchMode(!isSearchMode);
          }}
        />
      )}
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  ${flexBox({})}
  height: 30px;
`;

const inputWidthAnimation = keyframes`
  0%{width: 34px}
  100%{width: 180px;}
  
`;

const FormWrap = styled.form`
  ${flexBox({})}
  gap: 5px;
  animation: ${inputWidthAnimation} 0.3s forwards;
  width: 180px;
  height: 30px;
  padding: 0 5px;
  border: 1px solid ${COLOR.WHITE};
  background: #141414b2;

  input {
    width: 100%;
    height: 100%;
    ${typography({ size: 'xSmall' })}
    color: ${COLOR.WHITE};
  }
`;
