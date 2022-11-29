import React, { FC, memo } from 'react';
import PrinterPosPauseOutlineSvg from '../svg/printer-pos-pause-outline.svg';

export interface IPrinterPosPauseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrinterPosPauseOutlineIcon: FC<IPrinterPosPauseOutlineIconProps> = memo(props => {
  return <PrinterPosPauseOutlineSvg {...props} />;
});
