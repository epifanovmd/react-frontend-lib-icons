import React, { FC, memo } from 'react';
import CardsClubOutlineSvg from '../svg/cards-club-outline.svg';

export interface ICardsClubOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsClubOutlineIcon: FC<ICardsClubOutlineIconProps> = memo(props => {
  return <CardsClubOutlineSvg {...props} />;
});
