import React, { FC, memo } from 'react';
import FoodDrumstickOutlineSvg from '../svg/food-drumstick-outline.svg';

export interface IFoodDrumstickOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodDrumstickOutlineIcon: FC<IFoodDrumstickOutlineIconProps> = memo(props => {
  return <FoodDrumstickOutlineSvg {...props} />;
});
