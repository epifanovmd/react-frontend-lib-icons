import React, { FC, memo } from 'react';
import FoodKosherSvg from '../svg/food-kosher.svg';

export interface IFoodKosherIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodKosherIcon: FC<IFoodKosherIconProps> = memo(props => {
  return <FoodKosherSvg {...props} />;
});
