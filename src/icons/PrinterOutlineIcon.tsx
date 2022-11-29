import React, { FC, memo } from 'react';
import PrinterOutlineSvg from '../svg/printer-outline.svg';

export interface IPrinterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterOutlineIcon: FC<IPrinterOutlineIconProps> = memo(props => {
  return <PrinterOutlineSvg {...props} />;
});
