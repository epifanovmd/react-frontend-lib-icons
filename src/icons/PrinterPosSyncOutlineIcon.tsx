import React, { FC, memo } from 'react';
import PrinterPosSyncOutlineSvg from '../svg/printer-pos-sync-outline.svg';

export interface IPrinterPosSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosSyncOutlineIcon: FC<IPrinterPosSyncOutlineIconProps> = memo(props => {
  return <PrinterPosSyncOutlineSvg {...props} />;
});
