import React, { FC, memo } from 'react';
import CardsSpadeOutlineSvg from '../svg/cards-spade-outline.svg';

export interface ICardsSpadeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsSpadeOutlineIcon: FC<ICardsSpadeOutlineIconProps> = memo(props => {
  return <CardsSpadeOutlineSvg {...props} />;
});
