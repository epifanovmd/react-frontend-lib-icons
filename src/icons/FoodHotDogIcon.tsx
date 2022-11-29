import React, { FC, memo } from 'react';
import FoodHotDogSvg from '../svg/food-hot-dog.svg';

export interface IFoodHotDogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodHotDogIcon: FC<IFoodHotDogIconProps> = memo(props => {
  return <FoodHotDogSvg {...props} />;
});
