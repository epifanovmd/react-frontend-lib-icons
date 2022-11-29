import React, { FC, memo } from 'react';
import VideoOffSvg from '../svg/video-off.svg';

export interface IVideoOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoOffIcon: FC<IVideoOffIconProps> = memo(props => {
  return <VideoOffSvg {...props} />;
});
