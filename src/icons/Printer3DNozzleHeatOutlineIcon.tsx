import React, { FC, memo } from 'react';
import Printer3DNozzleHeatOutlineSvg from '../svg/printer-3d-nozzle-heat-outline.svg';

export interface IPrinter3DNozzleHeatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DNozzleHeatOutlineIcon: FC<IPrinter3DNozzleHeatOutlineIconProps> = memo(props => {
  return <Printer3DNozzleHeatOutlineSvg {...props} />;
});
