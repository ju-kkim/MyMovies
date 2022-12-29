import { useFavorite } from '@/hook/useFavorite';
import React from 'react';
import IconButton from '../IconButton';

export default function FavoriteButton({
  movieId,
  isText = false,
}: {
  movieId: number;
  isText?: boolean;
}) {
  const { postFavorite, isFavoriteState, favoriteIconStyle } = useFavorite({ movieId });
  const toggleFavorite = () => postFavorite({ isFavorite: !isFavoriteState });

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
