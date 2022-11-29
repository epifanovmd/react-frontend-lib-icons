import React, { FC, memo } from 'react';
import CardsPlayingOutlineSvg from '../svg/cards-playing-outline.svg';

export interface ICardsPlayingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingOutlineIcon: FC<ICardsPlayingOutlineIconProps> = memo(props => {
  return <CardsPlayingOutlineSvg {...props} />;
});
