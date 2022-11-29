import React, { FC, memo } from 'react';
import FoodTakeoutBoxSvg from '../svg/food-takeout-box.svg';

export interface IFoodTakeoutBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodTakeoutBoxIcon: FC<IFoodTakeoutBoxIconProps> = memo(props => {
  return <FoodTakeoutBoxSvg {...props} />;
});
