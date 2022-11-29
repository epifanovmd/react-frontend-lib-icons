import React, { FC, memo } from 'react';
import Printer3DOffSvg from '../svg/printer-3d-off.svg';

export interface IPrinter3DOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Printer3DOffIcon: FC<IPrinter3DOffIconProps> = memo(props => {
  return <Printer3DOffSvg {...props} />;
});
