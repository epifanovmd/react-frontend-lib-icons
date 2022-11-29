import React, { FC, memo } from 'react';
import BatteryHeartVariantSvg from '../svg/battery-heart-variant.svg';

export interface IBatteryHeartVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryHeartVariantIcon: FC<IBatteryHeartVariantIconProps> = memo(props => {
  return <BatteryHeartVariantSvg {...props} />;
});
