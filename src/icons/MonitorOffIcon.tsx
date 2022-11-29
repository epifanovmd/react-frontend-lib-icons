import React, { FC, memo } from 'react';
import MonitorOffSvg from '../svg/monitor-off.svg';

export interface IMonitorOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorOffIcon: FC<IMonitorOffIconProps> = memo(props => {
  return <MonitorOffSvg {...props} />;
});
