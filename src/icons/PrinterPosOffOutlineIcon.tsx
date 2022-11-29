import React, { FC, memo } from 'react';
import PrinterPosOffOutlineSvg from '../svg/printer-pos-off-outline.svg';

export interface IPrinterPosOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosOffOutlineIcon: FC<IPrinterPosOffOutlineIconProps> = memo(props => {
  return <PrinterPosOffOutlineSvg {...props} />;
});
