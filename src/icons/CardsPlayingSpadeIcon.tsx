import React, { FC, memo } from 'react';
import CardsPlayingSpadeSvg from '../svg/cards-playing-spade.svg';

export interface ICardsPlayingSpadeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingSpadeIcon: FC<ICardsPlayingSpadeIconProps> = memo(props => {
  return <CardsPlayingSpadeSvg {...props} />;
});
