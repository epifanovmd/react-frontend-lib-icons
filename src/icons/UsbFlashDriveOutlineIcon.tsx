import React, { FC, memo } from 'react';
import UsbFlashDriveOutlineSvg from '../svg/usb-flash-drive-outline.svg';

export interface IUsbFlashDriveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UsbFlashDriveOutlineIcon: FC<IUsbFlashDriveOutlineIconProps> = memo(props => {
  return <UsbFlashDriveOutlineSvg {...props} />;
});
