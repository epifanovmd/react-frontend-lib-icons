import React, { FC, memo } from 'react';
import PrinterOffOutlineSvg from '../svg/printer-off-outline.svg';

export interface IPrinterOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterOffOutlineIcon: FC<IPrinterOffOutlineIconProps> = memo(props => {
  return <PrinterOffOutlineSvg {...props} />;
});
