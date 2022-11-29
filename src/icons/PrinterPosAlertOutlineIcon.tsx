import React, { FC, memo } from 'react';
import PrinterPosAlertOutlineSvg from '../svg/printer-pos-alert-outline.svg';

export interface IPrinterPosAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosAlertOutlineIcon: FC<IPrinterPosAlertOutlineIconProps> = memo(props => {
  return <PrinterPosAlertOutlineSvg {...props} />;
});
