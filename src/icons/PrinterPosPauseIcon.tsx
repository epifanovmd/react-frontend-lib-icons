import React, { FC, memo } from 'react';
import PrinterPosPauseSvg from '../svg/printer-pos-pause.svg';

export interface IPrinterPosPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPauseIcon: FC<IPrinterPosPauseIconProps> = memo(props => {
  return <PrinterPosPauseSvg {...props} />;
});
