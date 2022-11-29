import React, { FC, memo } from 'react';
import CardsPlayingDiamondMultipleOutlineSvg from '../svg/cards-playing-diamond-multiple-outline.svg';

export interface ICardsPlayingDiamondMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingDiamondMultipleOutlineIcon: FC<ICardsPlayingDiamondMultipleOutlineIconProps> = memo(props => {
  return <CardsPlayingDiamondMultipleOutlineSvg {...props} />;
});
