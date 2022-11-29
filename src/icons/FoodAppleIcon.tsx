import React, { FC, memo } from 'react';
import FoodAppleSvg from '../svg/food-apple.svg';

export interface IFoodAppleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodAppleIcon: FC<IFoodAppleIconProps> = memo(props => {
  return <FoodAppleSvg {...props} />;
});
