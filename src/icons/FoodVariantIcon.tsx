import React, { FC, memo } from 'react';
import FoodVariantSvg from '../svg/food-variant.svg';

export interface IFoodVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodVariantIcon: FC<IFoodVariantIconProps> = memo(props => {
  return <FoodVariantSvg {...props} />;
});
