import React, { FC, memo } from 'react';
import VideoInputHdmiSvg from '../svg/video-input-hdmi.svg';

export interface IVideoInputHdmiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoInputHdmiIcon: FC<IVideoInputHdmiIconProps> = memo(props => {
  return <VideoInputHdmiSvg {...props} />;
});
