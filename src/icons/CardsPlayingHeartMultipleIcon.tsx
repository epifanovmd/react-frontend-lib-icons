import React, { FC, memo } from 'react';
import CardsPlayingHeartMultipleSvg from '../svg/cards-playing-heart-multiple.svg';

export interface ICardsPlayingHeartMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsPlayingHeartMultipleIcon: FC<ICardsPlayingHeartMultipleIconProps> = memo(props => {
  return <CardsPlayingHeartMultipleSvg {...props} />;
});
