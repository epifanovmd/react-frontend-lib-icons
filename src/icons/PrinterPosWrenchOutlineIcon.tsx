import React, { FC, memo } from 'react';
import PrinterPosWrenchOutlineSvg from '../svg/printer-pos-wrench-outline.svg';

export interface IPrinterPosWrenchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosWrenchOutlineIcon: FC<IPrinterPosWrenchOutlineIconProps> = memo(props => {
  return <PrinterPosWrenchOutlineSvg {...props} />;
});
