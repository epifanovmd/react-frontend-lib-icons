import React, { FC, memo } from 'react';
import VideoInputSvideoSvg from '../svg/video-input-svideo.svg';

export interface IVideoInputSvideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoInputSvideoIcon: FC<IVideoInputSvideoIconProps> = memo(props => {
  return <VideoInputSvideoSvg {...props} />;
});
