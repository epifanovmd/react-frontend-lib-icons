import React, { FC, memo } from 'react';
import PrinterAlertSvg from '../svg/printer-alert.svg';

export interface IPrinterAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterAlertIcon: FC<IPrinterAlertIconProps> = memo(props => {
  return <PrinterAlertSvg {...props} />;
});
