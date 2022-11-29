import React, { FC, memo } from 'react';
import FoodTakeoutBoxOutlineSvg from '../svg/food-takeout-box-outline.svg';

export interface IFoodTakeoutBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodTakeoutBoxOutlineIcon: FC<IFoodTakeoutBoxOutlineIconProps> = memo(props => {
  return <FoodTakeoutBoxOutlineSvg {...props} />;
});
