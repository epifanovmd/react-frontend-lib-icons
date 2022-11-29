import React, { FC, memo } from 'react';
import CardsPlayingDiamondOutlineSvg from '../svg/cards-playing-diamond-outline.svg';

export interface ICardsPlayingDiamondOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingDiamondOutlineIcon: FC<ICardsPlayingDiamondOutlineIconProps> = memo(props => {
  return <CardsPlayingDiamondOutlineSvg {...props} />;
});
