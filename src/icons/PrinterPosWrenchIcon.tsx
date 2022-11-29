import React, { FC, memo } from 'react';
import PrinterPosWrenchSvg from '../svg/printer-pos-wrench.svg';

export interface IPrinterPosWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosWrenchIcon: FC<IPrinterPosWrenchIconProps> = memo(props => {
  return <PrinterPosWrenchSvg {...props} />;
});
