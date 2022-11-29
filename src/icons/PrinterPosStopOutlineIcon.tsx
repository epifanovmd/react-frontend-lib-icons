import React, { FC, memo } from 'react';
import PrinterPosStopOutlineSvg from '../svg/printer-pos-stop-outline.svg';

export interface IPrinterPosStopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosStopOutlineIcon: FC<IPrinterPosStopOutlineIconProps> = memo(props => {
  return <PrinterPosStopOutlineSvg {...props} />;
});
