import React, { FC, memo } from 'react';
import CardsVariantSvg from '../svg/cards-variant.svg';

export interface ICardsVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardsVariantIcon: FC<ICardsVariantIconProps> = memo(props => {
  return <CardsVariantSvg {...props} />;
});
