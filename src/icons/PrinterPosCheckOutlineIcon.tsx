import React, { FC, memo } from 'react';
import PrinterPosCheckOutlineSvg from '../svg/printer-pos-check-outline.svg';

export interface IPrinterPosCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCheckOutlineIcon: FC<IPrinterPosCheckOutlineIconProps> = memo(props => {
  return <PrinterPosCheckOutlineSvg {...props} />;
});
