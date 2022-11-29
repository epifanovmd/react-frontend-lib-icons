import React, { FC, memo } from 'react';
import FridgeVariantAlertSvg from '../svg/fridge-variant-alert.svg';

export interface IFridgeVariantAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FridgeVariantAlertIcon: FC<IFridgeVariantAlertIconProps> = memo(props => {
  return <FridgeVariantAlertSvg {...props} />;
});
