import React from 'react';
import SearchIcon from '@/assets/svg/search.svg';

export default function SearchBtn({ onClick }: { onClick?: React.MouseEventHandler }) {
  return (
    <button onClick={onClick}>
      <SearchIcon />
    </button>
  );
}
