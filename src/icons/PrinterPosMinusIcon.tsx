import React, { FC, memo } from 'react';
import PrinterPosMinusSvg from '../svg/printer-pos-minus.svg';

export interface IPrinterPosMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosMinusIcon: FC<IPrinterPosMinusIconProps> = memo(props => {
  return <PrinterPosMinusSvg {...props} />;
});
