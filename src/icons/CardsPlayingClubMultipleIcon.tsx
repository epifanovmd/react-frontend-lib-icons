import React, { FC, memo } from 'react';
import CardsPlayingClubMultipleSvg from '../svg/cards-playing-club-multiple.svg';

export interface ICardsPlayingClubMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingClubMultipleIcon: FC<ICardsPlayingClubMultipleIconProps> = memo(props => {
  return <CardsPlayingClubMultipleSvg {...props} />;
});
