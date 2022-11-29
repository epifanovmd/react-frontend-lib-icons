import React, { FC, memo } from 'react';
import Printer3DSvg from '../svg/printer-3d.svg';

export interface IPrinter3DIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DIcon: FC<IPrinter3DIconProps> = memo(props => {
  return <Printer3DSvg {...props} />;
});
