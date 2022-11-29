import React, { FC, memo } from 'react';
import MonitorShareSvg from '../svg/monitor-share.svg';

export interface IMonitorShareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorShareIcon: FC<IMonitorShareIconProps> = memo(props => {
  return <MonitorShareSvg {...props} />;
});
