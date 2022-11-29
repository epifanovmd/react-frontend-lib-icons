import React, { FC, memo } from 'react';
import UsbFlashDriveSvg from '../svg/usb-flash-drive.svg';

export interface IUsbFlashDriveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UsbFlashDriveIcon: FC<IUsbFlashDriveIconProps> = memo(props => {
  return <UsbFlashDriveSvg {...props} />;
});
