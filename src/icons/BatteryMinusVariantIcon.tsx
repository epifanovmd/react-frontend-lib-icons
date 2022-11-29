import React, { FC, memo } from 'react';
import BatteryMinusVariantSvg from '../svg/battery-minus-variant.svg';

export interface IBatteryMinusVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryMinusVariantIcon: FC<IBatteryMinusVariantIconProps> = memo(props => {
  return <BatteryMinusVariantSvg {...props} />;
});
