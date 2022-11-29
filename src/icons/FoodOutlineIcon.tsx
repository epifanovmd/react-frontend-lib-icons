import React, { FC, memo } from 'react';
import FoodOutlineSvg from '../svg/food-outline.svg';

export interface IFoodOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodOutlineIcon: FC<IFoodOutlineIconProps> = memo(props => {
  return <FoodOutlineSvg {...props} />;
});
