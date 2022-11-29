import React, { FC, memo } from 'react';
import CardsPlayingSpadeOutlineSvg from '../svg/cards-playing-spade-outline.svg';

export interface ICardsPlayingSpadeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingSpadeOutlineIcon: FC<ICardsPlayingSpadeOutlineIconProps> = memo(props => {
  return <CardsPlayingSpadeOutlineSvg {...props} />;
});
