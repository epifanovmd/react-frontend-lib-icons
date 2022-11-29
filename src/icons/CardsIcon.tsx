import React, { FC, memo } from 'react';
import CardsSvg from '../svg/cards.svg';

export interface ICardsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsIcon: FC<ICardsIconProps> = memo(props => {
  return <CardsSvg {...props} />;
});
