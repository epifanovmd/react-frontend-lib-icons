import React, { FC, memo } from 'react';
import PistonSvg from '../svg/piston.svg';

export interface IPistonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PistonIcon: FC<IPistonIconProps> = memo(props => {
  return <PistonSvg {...props} />;
});
