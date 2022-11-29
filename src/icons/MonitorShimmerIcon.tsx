import React, { FC, memo } from 'react';
import MonitorShimmerSvg from '../svg/monitor-shimmer.svg';

export interface IMonitorShimmerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorShimmerIcon: FC<IMonitorShimmerIconProps> = memo(props => {
  return <MonitorShimmerSvg {...props} />;
});
