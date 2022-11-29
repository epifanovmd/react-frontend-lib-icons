import React, { FC, memo } from 'react';
import PrinterPosStopSvg from '../svg/printer-pos-stop.svg';

export interface IPrinterPosStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosStopIcon: FC<IPrinterPosStopIconProps> = memo(props => {
  return <PrinterPosStopSvg {...props} />;
});
