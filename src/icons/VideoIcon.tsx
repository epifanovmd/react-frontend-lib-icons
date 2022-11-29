import React, { FC, memo } from 'react';
import VideoSvg from '../svg/video.svg';

export interface IVideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoIcon: FC<IVideoIconProps> = memo(props => {
  return <VideoSvg {...props} />;
});
