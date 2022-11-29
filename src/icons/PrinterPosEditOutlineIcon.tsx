import React, { FC, memo } from 'react';
import PrinterPosEditOutlineSvg from '../svg/printer-pos-edit-outline.svg';

export interface IPrinterPosEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosEditOutlineIcon: FC<IPrinterPosEditOutlineIconProps> = memo(props => {
  return <PrinterPosEditOutlineSvg {...props} />;
});
