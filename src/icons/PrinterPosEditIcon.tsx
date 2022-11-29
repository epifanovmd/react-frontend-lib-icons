import React, { FC, memo } from 'react';
import PrinterPosEditSvg from '../svg/printer-pos-edit.svg';

export interface IPrinterPosEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosEditIcon: FC<IPrinterPosEditIconProps> = memo(props => {
  return <PrinterPosEditSvg {...props} />;
});
