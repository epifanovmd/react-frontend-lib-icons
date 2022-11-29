import React, { FC, memo } from 'react';
import PrinterPosPlusOutlineSvg from '../svg/printer-pos-plus-outline.svg';

export interface IPrinterPosPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPlusOutlineIcon: FC<IPrinterPosPlusOutlineIconProps> = memo(props => {
  return <PrinterPosPlusOutlineSvg {...props} />;
});
