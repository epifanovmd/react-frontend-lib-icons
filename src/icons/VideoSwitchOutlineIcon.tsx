import React, { FC, memo } from 'react';
import VideoSwitchOutlineSvg from '../svg/video-switch-outline.svg';

export interface IVideoSwitchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoSwitchOutlineIcon: FC<IVideoSwitchOutlineIconProps> = memo(props => {
  return <VideoSwitchOutlineSvg {...props} />;
});
