import React, { FC, memo } from 'react';
import CardsPlayingDiamondSvg from '../svg/cards-playing-diamond.svg';

export interface ICardsPlayingDiamondIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingDiamondIcon: FC<ICardsPlayingDiamondIconProps> = memo(props => {
  return <CardsPlayingDiamondSvg {...props} />;
});
