import React, { FC, memo } from 'react';
import PrinterPosOffSvg from '../svg/printer-pos-off.svg';

export interface IPrinterPosOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosOffIcon: FC<IPrinterPosOffIconProps> = memo(props => {
  return <PrinterPosOffSvg {...props} />;
});
