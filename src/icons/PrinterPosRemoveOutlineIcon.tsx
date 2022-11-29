import React, { FC, memo } from 'react';
import PrinterPosRemoveOutlineSvg from '../svg/printer-pos-remove-outline.svg';

export interface IPrinterPosRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosRemoveOutlineIcon: FC<IPrinterPosRemoveOutlineIconProps> = memo(props => {
  return <PrinterPosRemoveOutlineSvg {...props} />;
});
