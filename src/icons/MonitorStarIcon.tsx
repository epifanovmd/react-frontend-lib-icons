import React, { FC, memo } from 'react';
import MonitorStarSvg from '../svg/monitor-star.svg';

export interface IMonitorStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorStarIcon: FC<IMonitorStarIconProps> = memo(props => {
  return <MonitorStarSvg {...props} />;
});
