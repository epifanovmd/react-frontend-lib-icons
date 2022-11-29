import React, { FC, memo } from 'react';
import PrinterPosMinusOutlineSvg from '../svg/printer-pos-minus-outline.svg';

export interface IPrinterPosMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosMinusOutlineIcon: FC<IPrinterPosMinusOutlineIconProps> = memo(props => {
  return <PrinterPosMinusOutlineSvg {...props} />;
});
