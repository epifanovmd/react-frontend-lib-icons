import React, { FC, memo } from 'react';
import PrinterWirelessSvg from '../svg/printer-wireless.svg';

export interface IPrinterWirelessIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterWirelessIcon: FC<IPrinterWirelessIconProps> = memo(props => {
  return <PrinterWirelessSvg {...props} />;
});
