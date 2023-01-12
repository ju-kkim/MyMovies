import COLOR from '@/common/color';
import { accountFavoriteType } from '@/hook/useAccountStates';
import { useFavorite } from '@/hook/useFavorite';
import React from 'react';
import IconButton from '../IconButton';

export default function FavoriteButton({
  movieId,
  accountFavorite,
  isText = false,
}: favoriteButtonPropsType) {
  const { postFavorite } = useFavorite();
  const toggleFavorite = () => postFavorite({ movieId, accountFavorite });
  const favoriteIconStyle = accountFavorite.state ? `color: ${COLOR.YELLOW}; opacity:1;` : '';

  return (
    <IconButton
      icon="plus"
      iconSize={isText ? '17px' : '28px'}
      clickHandler={toggleFavorite}
      buttonStyle={favoriteIconStyle}
      text={isText ? '즐겨찾기' : ''}
    />
  );
}

type favoriteButtonPropsType = {
  movieId: number;
  accountFavorite: accountFavoriteType;
  isText?: boolean;
};
