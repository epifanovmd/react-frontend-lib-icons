import React, { FC, memo } from 'react';
import CardsPlayingSpadeMultipleOutlineSvg from '../svg/cards-playing-spade-multiple-outline.svg';

export interface ICardsPlayingSpadeMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingSpadeMultipleOutlineIcon: FC<ICardsPlayingSpadeMultipleOutlineIconProps> = memo(props => {
  return <CardsPlayingSpadeMultipleOutlineSvg {...props} />;
});
