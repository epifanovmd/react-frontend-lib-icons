import React, { FC, memo } from 'react';
import FoodDrumstickSvg from '../svg/food-drumstick.svg';

export interface IFoodDrumstickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodDrumstickIcon: FC<IFoodDrumstickIconProps> = memo(props => {
  return <FoodDrumstickSvg {...props} />;
});
