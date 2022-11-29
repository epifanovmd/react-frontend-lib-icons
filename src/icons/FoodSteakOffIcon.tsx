import React, { FC, memo } from 'react';
import FoodSteakOffSvg from '../svg/food-steak-off.svg';

export interface IFoodSteakOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodSteakOffIcon: FC<IFoodSteakOffIconProps> = memo(props => {
  return <FoodSteakOffSvg {...props} />;
});
