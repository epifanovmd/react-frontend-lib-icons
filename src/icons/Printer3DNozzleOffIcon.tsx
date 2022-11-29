import React, { FC, memo } from 'react';
import Printer3DNozzleOffSvg from '../svg/printer-3d-nozzle-off.svg';

export interface IPrinter3DNozzleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleOffIcon: FC<IPrinter3DNozzleOffIconProps> = memo(props => {
  return <Printer3DNozzleOffSvg {...props} />;
});
