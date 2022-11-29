import React, { FC, memo } from 'react';
import Printer3DNozzleHeatSvg from '../svg/printer-3d-nozzle-heat.svg';

export interface IPrinter3DNozzleHeatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleHeatIcon: FC<IPrinter3DNozzleHeatIconProps> = memo(props => {
  return <Printer3DNozzleHeatSvg {...props} />;
});
