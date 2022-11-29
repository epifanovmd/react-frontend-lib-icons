import React, { FC, memo } from 'react';
import PrinterPosCheckSvg from '../svg/printer-pos-check.svg';

export interface IPrinterPosCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCheckIcon: FC<IPrinterPosCheckIconProps> = memo(props => {
  return <PrinterPosCheckSvg {...props} />;
});
