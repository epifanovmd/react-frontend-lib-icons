import React, { FC, memo } from 'react';
import BatteryPlusVariantSvg from '../svg/battery-plus-variant.svg';

export interface IBatteryPlusVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryPlusVariantIcon: FC<IBatteryPlusVariantIconProps> = memo(props => {
  return <BatteryPlusVariantSvg {...props} />;
});
