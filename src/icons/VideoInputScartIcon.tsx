import React, { FC, memo } from 'react';
import VideoInputScartSvg from '../svg/video-input-scart.svg';

export interface IVideoInputScartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoInputScartIcon: FC<IVideoInputScartIconProps> = memo(props => {
  return <VideoInputScartSvg {...props} />;
});
