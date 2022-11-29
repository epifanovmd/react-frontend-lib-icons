import React, { FC, memo } from 'react';
import Printer3DNozzleOutlineSvg from '../svg/printer-3d-nozzle-outline.svg';

export interface IPrinter3DNozzleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleOutlineIcon: FC<IPrinter3DNozzleOutlineIconProps> = memo(props => {
  return <Printer3DNozzleOutlineSvg {...props} />;
});
