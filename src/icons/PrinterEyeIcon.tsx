import React, { FC, memo } from 'react';
import PrinterEyeSvg from '../svg/printer-eye.svg';

export interface IPrinterEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterEyeIcon: FC<IPrinterEyeIconProps> = memo(props => {
  return <PrinterEyeSvg {...props} />;
});
