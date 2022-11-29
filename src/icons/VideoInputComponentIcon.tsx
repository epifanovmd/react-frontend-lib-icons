import React, { FC, memo } from 'react';
import VideoInputComponentSvg from '../svg/video-input-component.svg';

export interface IVideoInputComponentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoInputComponentIcon: FC<IVideoInputComponentIconProps> = memo(props => {
  return <VideoInputComponentSvg {...props} />;
});
