import React, { FC, memo } from 'react';
import PrinterPosStarOutlineSvg from '../svg/printer-pos-star-outline.svg';

export interface IPrinterPosStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosStarOutlineIcon: FC<IPrinterPosStarOutlineIconProps> = memo(props => {
  return <PrinterPosStarOutlineSvg {...props} />;
});
