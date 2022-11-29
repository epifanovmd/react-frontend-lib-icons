import React, { FC, memo } from 'react';
import PrinterSvg from '../svg/printer.svg';

export interface IPrinterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterIcon: FC<IPrinterIconProps> = memo(props => {
  return <PrinterSvg {...props} />;
});
