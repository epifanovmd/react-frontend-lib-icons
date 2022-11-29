import React, { FC, memo } from 'react';
import CardsPlayingClubSvg from '../svg/cards-playing-club.svg';

export interface ICardsPlayingClubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingClubIcon: FC<ICardsPlayingClubIconProps> = memo(props => {
  return <CardsPlayingClubSvg {...props} />;
});
