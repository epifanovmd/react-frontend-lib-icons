import React, { FC, memo } from 'react';
import Printer3DNozzleSvg from '../svg/printer-3d-nozzle.svg';

export interface IPrinter3DNozzleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleIcon: FC<IPrinter3DNozzleIconProps> = memo(props => {
  return <Printer3DNozzleSvg {...props} />;
});
