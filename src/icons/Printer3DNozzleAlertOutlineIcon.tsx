import React, { FC, memo } from 'react';
import Printer3DNozzleAlertOutlineSvg from '../svg/printer-3d-nozzle-alert-outline.svg';

export interface IPrinter3DNozzleAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleAlertOutlineIcon: FC<IPrinter3DNozzleAlertOutlineIconProps> = memo(props => {
  return <Printer3DNozzleAlertOutlineSvg {...props} />;
});
