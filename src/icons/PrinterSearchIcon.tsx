import React, { FC, memo } from 'react';
import PrinterSearchSvg from '../svg/printer-search.svg';

export interface IPrinterSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterSearchIcon: FC<IPrinterSearchIconProps> = memo(props => {
  return <PrinterSearchSvg {...props} />;
});
