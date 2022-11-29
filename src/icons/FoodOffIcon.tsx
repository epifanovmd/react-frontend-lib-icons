import React, { FC, memo } from 'react';
import FoodOffSvg from '../svg/food-off.svg';

export interface IFoodOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodOffIcon: FC<IFoodOffIconProps> = memo(props => {
  return <FoodOffSvg {...props} />;
});
