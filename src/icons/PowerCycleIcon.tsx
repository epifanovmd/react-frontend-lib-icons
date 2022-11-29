import React, { FC, memo } from 'react';
import PowerCycleSvg from '../svg/power-cycle.svg';

export interface IPowerCycleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerCycleIcon: FC<IPowerCycleIconProps> = memo(props => {
  return <PowerCycleSvg {...props} />;
});
