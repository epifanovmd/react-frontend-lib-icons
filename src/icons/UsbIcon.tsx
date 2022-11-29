import React, { FC, memo } from 'react';
import UsbSvg from '../svg/usb.svg';

export interface IUsbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UsbIcon: FC<IUsbIconProps> = memo(props => {
  return <UsbSvg {...props} />;
});
