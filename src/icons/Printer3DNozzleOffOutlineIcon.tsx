import React, { FC, memo } from 'react';
import Printer3DNozzleOffOutlineSvg from '../svg/printer-3d-nozzle-off-outline.svg';

export interface IPrinter3DNozzleOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleOffOutlineIcon: FC<IPrinter3DNozzleOffOutlineIconProps> = memo(props => {
  return <Printer3DNozzleOffOutlineSvg {...props} />;
});
