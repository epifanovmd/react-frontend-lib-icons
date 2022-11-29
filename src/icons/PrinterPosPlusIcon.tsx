import React, { FC, memo } from 'react';
import PrinterPosPlusSvg from '../svg/printer-pos-plus.svg';

export interface IPrinterPosPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPlusIcon: FC<IPrinterPosPlusIconProps> = memo(props => {
  return <PrinterPosPlusSvg {...props} />;
});
