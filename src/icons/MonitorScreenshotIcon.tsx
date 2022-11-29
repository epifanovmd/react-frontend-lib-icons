import React, { FC, memo } from 'react';
import MonitorScreenshotSvg from '../svg/monitor-screenshot.svg';

export interface IMonitorScreenshotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorScreenshotIcon: FC<IMonitorScreenshotIconProps> = memo(props => {
  return <MonitorScreenshotSvg {...props} />;
});
