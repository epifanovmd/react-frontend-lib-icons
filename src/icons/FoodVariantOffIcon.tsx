import React, { FC, memo } from 'react';
import FoodVariantOffSvg from '../svg/food-variant-off.svg';

export interface IFoodVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodVariantOffIcon: FC<IFoodVariantOffIconProps> = memo(props => {
  return <FoodVariantOffSvg {...props} />;
});
