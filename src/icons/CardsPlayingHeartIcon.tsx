import React, { FC, memo } from 'react';
import CardsPlayingHeartSvg from '../svg/cards-playing-heart.svg';

export interface ICardsPlayingHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingHeartIcon: FC<ICardsPlayingHeartIconProps> = memo(props => {
  return <CardsPlayingHeartSvg {...props} />;
});
