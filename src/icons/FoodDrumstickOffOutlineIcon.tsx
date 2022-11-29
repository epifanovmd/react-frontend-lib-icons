import React, { FC, memo } from 'react';
import FoodDrumstickOffOutlineSvg from '../svg/food-drumstick-off-outline.svg';

export interface IFoodDrumstickOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodDrumstickOffOutlineIcon: FC<IFoodDrumstickOffOutlineIconProps> = memo(props => {
  return <FoodDrumstickOffOutlineSvg {...props} />;
});
