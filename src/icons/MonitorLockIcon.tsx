import React, { FC, memo } from 'react';
import MonitorLockSvg from '../svg/monitor-lock.svg';

export interface IMonitorLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorLockIcon: FC<IMonitorLockIconProps> = memo(props => {
  return <MonitorLockSvg {...props} />;
});
