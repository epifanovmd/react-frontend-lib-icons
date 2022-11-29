import React, { FC, memo } from 'react';
import PumpSvg from '../svg/pump.svg';

export interface IPumpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PumpIcon: FC<IPumpIconProps> = memo(props => {
  return <PumpSvg {...props} />;
});
