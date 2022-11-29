import React, { FC, memo } from 'react';
import CardsHeartSvg from '../svg/cards-heart.svg';

export interface ICardsHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsHeartIcon: FC<ICardsHeartIconProps> = memo(props => {
  return <CardsHeartSvg {...props} />;
});
