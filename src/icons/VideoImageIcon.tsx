import React, { FC, memo } from 'react';
import VideoImageSvg from '../svg/video-image.svg';

export interface IVideoImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoImageIcon: FC<IVideoImageIconProps> = memo(props => {
  return <VideoImageSvg {...props} />;
});
