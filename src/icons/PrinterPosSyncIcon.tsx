import React, { FC, memo } from 'react';
import PrinterPosSyncSvg from '../svg/printer-pos-sync.svg';

export interface IPrinterPosSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosSyncIcon: FC<IPrinterPosSyncIconProps> = memo(props => {
  return <PrinterPosSyncSvg {...props} />;
});
