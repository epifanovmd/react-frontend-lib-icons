import React, { FC, memo } from 'react';
import FoodForkDrinkSvg from '../svg/food-fork-drink.svg';

export interface IFoodForkDrinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodForkDrinkIcon: FC<IFoodForkDrinkIconProps> = memo(props => {
  return <FoodForkDrinkSvg {...props} />;
});
