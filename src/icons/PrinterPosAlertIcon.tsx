import React, { FC, memo } from 'react';
import PrinterPosAlertSvg from '../svg/printer-pos-alert.svg';

export interface IPrinterPosAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosAlertIcon: FC<IPrinterPosAlertIconProps> = memo(props => {
  return <PrinterPosAlertSvg {...props} />;
});
