import React, { FC, memo } from 'react';
import FoodHalalSvg from '../svg/food-halal.svg';

export interface IFoodHalalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodHalalIcon: FC<IFoodHalalIconProps> = memo(props => {
  return <FoodHalalSvg {...props} />;
});
