import React, { FC, memo } from 'react';
import BatteryBluetoothVariantSvg from '../svg/battery-bluetooth-variant.svg';

export interface IBatteryBluetoothVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryBluetoothVariantIcon: FC<IBatteryBluetoothVariantIconProps> = memo(props => {
  return <BatteryBluetoothVariantSvg {...props} />;
});
