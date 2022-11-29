import React, { FC, memo } from 'react';
import CardsOutlineSvg from '../svg/cards-outline.svg';

export interface ICardsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsOutlineIcon: FC<ICardsOutlineIconProps> = memo(props => {
  return <CardsOutlineSvg {...props} />;
});
