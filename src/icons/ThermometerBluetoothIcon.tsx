import React, { FC, memo } from 'react';
import ThermometerBluetoothSvg from '../svg/thermometer-bluetooth.svg';

export interface IThermometerBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerBluetoothIcon: FC<IThermometerBluetoothIconProps> = memo(props => {
  return <ThermometerBluetoothSvg {...props} />;
});
