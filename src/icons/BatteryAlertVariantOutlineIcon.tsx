import React, { FC, memo } from 'react';
import BatteryAlertVariantOutlineSvg from '../svg/battery-alert-variant-outline.svg';

export interface IBatteryAlertVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryAlertVariantOutlineIcon: FC<IBatteryAlertVariantOutlineIconProps> = memo(props => {
  return <BatteryAlertVariantOutlineSvg {...props} />;
});
