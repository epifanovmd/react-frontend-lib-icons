import React, { FC, memo } from 'react';
import PrinterPosCogOutlineSvg from '../svg/printer-pos-cog-outline.svg';

export interface IPrinterPosCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCogOutlineIcon: FC<IPrinterPosCogOutlineIconProps> = memo(props => {
  return <PrinterPosCogOutlineSvg {...props} />;
});
