import React, { FC, memo } from 'react';
import PrinterOffSvg from '../svg/printer-off.svg';

export interface IPrinterOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterOffIcon: FC<IPrinterOffIconProps> = memo(props => {
  return <PrinterOffSvg {...props} />;
});
