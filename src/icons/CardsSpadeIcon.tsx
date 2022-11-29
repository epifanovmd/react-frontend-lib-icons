import React, { FC, memo } from 'react';
import CardsSpadeSvg from '../svg/cards-spade.svg';

export interface ICardsSpadeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsSpadeIcon: FC<ICardsSpadeIconProps> = memo(props => {
  return <CardsSpadeSvg {...props} />;
});
