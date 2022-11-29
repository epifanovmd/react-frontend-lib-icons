import React, { FC, memo } from 'react';
import Printer3DNozzleAlertSvg from '../svg/printer-3d-nozzle-alert.svg';

export interface IPrinter3DNozzleAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleAlertIcon: FC<IPrinter3DNozzleAlertIconProps> = memo(props => {
  return <Printer3DNozzleAlertSvg {...props} />;
});
