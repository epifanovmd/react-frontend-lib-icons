import React, { FC, memo } from 'react';
import VideoBoxSvg from '../svg/video-box.svg';

export interface IVideoBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoBoxIcon: FC<IVideoBoxIconProps> = memo(props => {
  return <VideoBoxSvg {...props} />;
});
