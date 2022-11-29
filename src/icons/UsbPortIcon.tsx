import React, { FC, memo } from 'react';
import UsbPortSvg from '../svg/usb-port.svg';

export interface IUsbPortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UsbPortIcon: FC<IUsbPortIconProps> = memo(props => {
  return <UsbPortSvg {...props} />;
});
