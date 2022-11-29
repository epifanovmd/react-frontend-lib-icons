import React, { FC, memo } from 'react';
import FoodOffOutlineSvg from '../svg/food-off-outline.svg';

export interface IFoodOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FoodOffOutlineIcon: FC<IFoodOffOutlineIconProps> = memo(props => {
  return <FoodOffOutlineSvg {...props} />;
});
