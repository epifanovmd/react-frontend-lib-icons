import React, { FC, memo } from 'react';
import MonitorSmallSvg from '../svg/monitor-small.svg';

export interface IMonitorSmallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorSmallIcon: FC<IMonitorSmallIconProps> = memo(props => {
  return <MonitorSmallSvg {...props} />;
});
