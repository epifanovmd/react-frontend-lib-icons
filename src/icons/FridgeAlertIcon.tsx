import React, { FC, memo } from 'react';
import FridgeAlertSvg from '../svg/fridge-alert.svg';

export interface IFridgeAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeAlertIcon: FC<IFridgeAlertIconProps> = memo(props => {
  return <FridgeAlertSvg {...props} />;
});
