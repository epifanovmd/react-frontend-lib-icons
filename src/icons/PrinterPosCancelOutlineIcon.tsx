import React, { FC, memo } from 'react';
import PrinterPosCancelOutlineSvg from '../svg/printer-pos-cancel-outline.svg';

export interface IPrinterPosCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosCancelOutlineIcon: FC<IPrinterPosCancelOutlineIconProps> = memo(props => {
  return <PrinterPosCancelOutlineSvg {...props} />;
});
