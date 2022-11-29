import React, { FC, memo } from 'react';
import CardsClubSvg from '../svg/cards-club.svg';

export interface ICardsClubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsClubIcon: FC<ICardsClubIconProps> = memo(props => {
  return <CardsClubSvg {...props} />;
});
