import React, { FC, memo } from 'react';
import FridgeIndustrialAlertSvg from '../svg/fridge-industrial-alert.svg';

export interface IFridgeIndustrialAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeIndustrialAlertIcon: FC<IFridgeIndustrialAlertIconProps> = memo(props => {
  return <FridgeIndustrialAlertSvg {...props} />;
});
