import React, { FC, memo } from 'react';
import PrinterPosCancelSvg from '../svg/printer-pos-cancel.svg';

export interface IPrinterPosCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCancelIcon: FC<IPrinterPosCancelIconProps> = memo(props => {
  return <PrinterPosCancelSvg {...props} />;
});
