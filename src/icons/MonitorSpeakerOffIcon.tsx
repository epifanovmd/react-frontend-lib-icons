import React, { FC, memo } from 'react';
import MonitorSpeakerOffSvg from '../svg/monitor-speaker-off.svg';

export interface IMonitorSpeakerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorSpeakerOffIcon: FC<IMonitorSpeakerOffIconProps> = memo(props => {
  return <MonitorSpeakerOffSvg {...props} />;
});
