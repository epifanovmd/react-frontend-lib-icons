import React, { FC, memo } from 'react';
import MonitorAccountSvg from '../svg/monitor-account.svg';

export interface IMonitorAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorAccountIcon: FC<IMonitorAccountIconProps> = memo(props => {
  return <MonitorAccountSvg {...props} />;
});
