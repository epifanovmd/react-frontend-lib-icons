import React, { FC, memo } from 'react';
import MonitorSvg from '../svg/monitor.svg';

export interface IMonitorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorIcon: FC<IMonitorIconProps> = memo(props => {
  return <MonitorSvg {...props} />;
});
