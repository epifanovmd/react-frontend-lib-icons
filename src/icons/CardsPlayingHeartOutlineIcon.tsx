import React, { FC, memo } from 'react';
import CardsPlayingHeartOutlineSvg from '../svg/cards-playing-heart-outline.svg';

export interface ICardsPlayingHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingHeartOutlineIcon: FC<ICardsPlayingHeartOutlineIconProps> = memo(props => {
  return <CardsPlayingHeartOutlineSvg {...props} />;
});
