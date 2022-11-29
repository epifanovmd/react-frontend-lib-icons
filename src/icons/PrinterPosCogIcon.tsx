import React, { FC, memo } from 'react';
import PrinterPosCogSvg from '../svg/printer-pos-cog.svg';

export interface IPrinterPosCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCogIcon: FC<IPrinterPosCogIconProps> = memo(props => {
  return <PrinterPosCogSvg {...props} />;
});
