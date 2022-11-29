import React, { FC, memo } from 'react';
import FoodDrumstickOffSvg from '../svg/food-drumstick-off.svg';

export interface IFoodDrumstickOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodDrumstickOffIcon: FC<IFoodDrumstickOffIconProps> = memo(props => {
  return <FoodDrumstickOffSvg {...props} />;
});
