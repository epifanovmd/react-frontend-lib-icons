import React, { FC, memo } from 'react';
import VideoCheckSvg from '../svg/video-check.svg';

export interface IVideoCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoCheckIcon: FC<IVideoCheckIconProps> = memo(props => {
  return <VideoCheckSvg {...props} />;
});
