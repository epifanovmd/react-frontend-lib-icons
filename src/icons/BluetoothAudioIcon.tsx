import React, { FC, memo } from 'react';
import BluetoothAudioSvg from '../svg/bluetooth-audio.svg';

export interface IBluetoothAudioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothAudioIcon: FC<IBluetoothAudioIconProps> = memo(props => {
  return <BluetoothAudioSvg {...props} />;
});
