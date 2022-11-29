import React, { FC, memo } from 'react';
import FoodTurkeySvg from '../svg/food-turkey.svg';

export interface IFoodTurkeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodTurkeyIcon: FC<IFoodTurkeyIconProps> = memo(props => {
  return <FoodTurkeySvg {...props} />;
});
