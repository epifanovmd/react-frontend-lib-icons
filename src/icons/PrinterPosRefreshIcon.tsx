import React, { FC, memo } from 'react';
import PrinterPosRefreshSvg from '../svg/printer-pos-refresh.svg';

export interface IPrinterPosRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosRefreshIcon: FC<IPrinterPosRefreshIconProps> = memo(props => {
  return <PrinterPosRefreshSvg {...props} />;
});
