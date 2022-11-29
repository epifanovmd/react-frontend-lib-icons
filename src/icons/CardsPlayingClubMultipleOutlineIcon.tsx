import React, { FC, memo } from 'react';
import CardsPlayingClubMultipleOutlineSvg from '../svg/cards-playing-club-multiple-outline.svg';

export interface ICardsPlayingClubMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingClubMultipleOutlineIcon: FC<ICardsPlayingClubMultipleOutlineIconProps> = memo(props => {
  return <CardsPlayingClubMultipleOutlineSvg {...props} />;
});
