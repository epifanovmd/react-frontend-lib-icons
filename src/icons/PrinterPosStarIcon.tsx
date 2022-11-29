import React, { FC, memo } from 'react';
import PrinterPosStarSvg from '../svg/printer-pos-star.svg';

export interface IPrinterPosStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosStarIcon: FC<IPrinterPosStarIconProps> = memo(props => {
  return <PrinterPosStarSvg {...props} />;
});
