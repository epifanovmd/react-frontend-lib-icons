import React, { FC, memo } from 'react';
import FoodSvg from '../svg/food.svg';

export interface IFoodIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodIcon: FC<IFoodIconProps> = memo(props => {
  return <FoodSvg {...props} />;
});
