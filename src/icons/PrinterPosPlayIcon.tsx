import React, { FC, memo } from 'react';
import PrinterPosPlaySvg from '../svg/printer-pos-play.svg';

export interface IPrinterPosPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPlayIcon: FC<IPrinterPosPlayIconProps> = memo(props => {
  return <PrinterPosPlaySvg {...props} />;
});
