import React, { FC, memo } from 'react';
import CardsPlayingClubOutlineSvg from '../svg/cards-playing-club-outline.svg';

export interface ICardsPlayingClubOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingClubOutlineIcon: FC<ICardsPlayingClubOutlineIconProps> = memo(props => {
  return <CardsPlayingClubOutlineSvg {...props} />;
});
