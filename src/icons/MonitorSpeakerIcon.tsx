import React, { FC, memo } from 'react';
import MonitorSpeakerSvg from '../svg/monitor-speaker.svg';

export interface IMonitorSpeakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MonitorSpeakerIcon: FC<IMonitorSpeakerIconProps> = memo(props => {
  return <MonitorSpeakerSvg {...props} />;
});
