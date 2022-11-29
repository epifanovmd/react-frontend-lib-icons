import React, { FC, memo } from 'react';
import DevicesSvg from '../svg/devices.svg';

export interface IDevicesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DevicesIcon: FC<IDevicesIconProps> = memo(props => {
  return <DevicesSvg {...props} />;
});
