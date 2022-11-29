import React, { FC, memo } from 'react';
import VideoSwitchSvg from '../svg/video-switch.svg';

export interface IVideoSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoSwitchIcon: FC<IVideoSwitchIconProps> = memo(props => {
  return <VideoSwitchSvg {...props} />;
});
