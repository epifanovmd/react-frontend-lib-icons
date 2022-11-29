import React, { FC, memo } from 'react';
import CardsPlayingSvg from '../svg/cards-playing.svg';

export interface ICardsPlayingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingIcon: FC<ICardsPlayingIconProps> = memo(props => {
  return <CardsPlayingSvg {...props} />;
});
