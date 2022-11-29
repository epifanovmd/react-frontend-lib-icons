import React, { FC, memo } from 'react';
import BatteryAlertVariantSvg from '../svg/battery-alert-variant.svg';

export interface IBatteryAlertVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryAlertVariantIcon: FC<IBatteryAlertVariantIconProps> = memo(props => {
  return <BatteryAlertVariantSvg {...props} />;
});
