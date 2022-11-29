import React, { FC, memo } from 'react';
import CardsPlayingDiamondMultipleSvg from '../svg/cards-playing-diamond-multiple.svg';

export interface ICardsPlayingDiamondMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingDiamondMultipleIcon: FC<ICardsPlayingDiamondMultipleIconProps> = memo(props => {
  return <CardsPlayingDiamondMultipleSvg {...props} />;
});
