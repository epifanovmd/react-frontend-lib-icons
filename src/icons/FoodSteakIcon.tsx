import React, { FC, memo } from 'react';
import FoodSteakSvg from '../svg/food-steak.svg';

export interface IFoodSteakIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodSteakIcon: FC<IFoodSteakIconProps> = memo(props => {
  return <FoodSteakSvg {...props} />;
});
