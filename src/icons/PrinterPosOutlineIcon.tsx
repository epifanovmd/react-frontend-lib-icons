import React, { FC, memo } from 'react';
import PrinterPosOutlineSvg from '../svg/printer-pos-outline.svg';

export interface IPrinterPosOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosOutlineIcon: FC<IPrinterPosOutlineIconProps> = memo(props => {
  return <PrinterPosOutlineSvg {...props} />;
});
