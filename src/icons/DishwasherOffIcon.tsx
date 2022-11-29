import React, { FC, memo } from 'react';
import DishwasherOffSvg from '../svg/dishwasher-off.svg';

export interface IDishwasherOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DishwasherOffIcon: FC<IDishwasherOffIconProps> = memo(props => {
  return <DishwasherOffSvg {...props} />;
});
