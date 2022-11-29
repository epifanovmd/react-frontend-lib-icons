import React, { FC, memo } from 'react';
import PrinterPosRefreshOutlineSvg from '../svg/printer-pos-refresh-outline.svg';

export interface IPrinterPosRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosRefreshOutlineIcon: FC<IPrinterPosRefreshOutlineIconProps> = memo(props => {
  return <PrinterPosRefreshOutlineSvg {...props} />;
});
