import React, { FC, memo } from 'react';
import FoodAppleOutlineSvg from '../svg/food-apple-outline.svg';

export interface IFoodAppleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodAppleOutlineIcon: FC<IFoodAppleOutlineIconProps> = memo(props => {
  return <FoodAppleOutlineSvg {...props} />;
});
