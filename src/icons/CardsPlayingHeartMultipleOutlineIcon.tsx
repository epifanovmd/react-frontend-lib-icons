import React, { FC, memo } from 'react';
import CardsPlayingHeartMultipleOutlineSvg from '../svg/cards-playing-heart-multiple-outline.svg';

export interface ICardsPlayingHeartMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingHeartMultipleOutlineIcon: FC<ICardsPlayingHeartMultipleOutlineIconProps> = memo(props => {
  return <CardsPlayingHeartMultipleOutlineSvg {...props} />;
});
