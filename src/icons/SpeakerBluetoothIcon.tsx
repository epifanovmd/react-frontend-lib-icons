import React, { FC, memo } from 'react';
import SpeakerBluetoothSvg from '../svg/speaker-bluetooth.svg';

export interface ISpeakerBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerBluetoothIcon: FC<ISpeakerBluetoothIconProps> = memo(props => {
  return <SpeakerBluetoothSvg {...props} />;
});
