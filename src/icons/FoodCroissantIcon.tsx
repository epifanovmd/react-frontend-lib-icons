import React, { FC, memo } from 'react';
import FoodCroissantSvg from '../svg/food-croissant.svg';

export interface IFoodCroissantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodCroissantIcon: FC<IFoodCroissantIconProps> = memo(props => {
  return <FoodCroissantSvg {...props} />;
});
