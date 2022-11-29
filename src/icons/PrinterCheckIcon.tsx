import React, { FC, memo } from 'react';
import PrinterCheckSvg from '../svg/printer-check.svg';

export interface IPrinterCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterCheckIcon: FC<IPrinterCheckIconProps> = memo(props => {
  return <PrinterCheckSvg {...props} />;
});
