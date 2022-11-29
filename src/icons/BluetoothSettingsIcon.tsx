import React, { FC, memo } from 'react';
import BluetoothSettingsSvg from '../svg/bluetooth-settings.svg';

export interface IBluetoothSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothSettingsIcon: FC<IBluetoothSettingsIconProps> = memo(props => {
  return <BluetoothSettingsSvg {...props} />;
});
