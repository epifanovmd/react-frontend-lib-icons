import React, { FC, memo } from 'react';
import DishwasherAlertSvg from '../svg/dishwasher-alert.svg';

export interface IDishwasherAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DishwasherAlertIcon: FC<IDishwasherAlertIconProps> = memo(props => {
  return <DishwasherAlertSvg {...props} />;
});
