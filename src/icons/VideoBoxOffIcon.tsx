import React, { FC, memo } from 'react';
import VideoBoxOffSvg from '../svg/video-box-off.svg';

export interface IVideoBoxOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoBoxOffIcon: FC<IVideoBoxOffIconProps> = memo(props => {
  return <VideoBoxOffSvg {...props} />;
});
