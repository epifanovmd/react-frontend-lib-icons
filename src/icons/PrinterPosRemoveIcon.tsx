import React, { FC, memo } from 'react';
import PrinterPosRemoveSvg from '../svg/printer-pos-remove.svg';

export interface IPrinterPosRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosRemoveIcon: FC<IPrinterPosRemoveIconProps> = memo(props => {
  return <PrinterPosRemoveSvg {...props} />;
});
