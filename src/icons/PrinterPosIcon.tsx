import React, { FC, memo } from 'react';
import PrinterPosSvg from '../svg/printer-pos.svg';

export interface IPrinterPosIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosIcon: FC<IPrinterPosIconProps> = memo(props => {
  return <PrinterPosSvg {...props} />;
});
