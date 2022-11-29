import React, { FC, memo } from 'react';
import CardsPlayingSpadeMultipleSvg from '../svg/cards-playing-spade-multiple.svg';

export interface ICardsPlayingSpadeMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingSpadeMultipleIcon: FC<ICardsPlayingSpadeMultipleIconProps> = memo(props => {
  return <CardsPlayingSpadeMultipleSvg {...props} />;
});
