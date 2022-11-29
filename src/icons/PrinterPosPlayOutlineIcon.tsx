import React, { FC, memo } from 'react';
import PrinterPosPlayOutlineSvg from '../svg/printer-pos-play-outline.svg';

export interface IPrinterPosPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPlayOutlineIcon: FC<IPrinterPosPlayOutlineIconProps> = memo(props => {
  return <PrinterPosPlayOutlineSvg {...props} />;
});
