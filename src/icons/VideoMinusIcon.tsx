import React, { FC, memo } from 'react';
import VideoMinusSvg from '../svg/video-minus.svg';

export interface IVideoMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoMinusIcon: FC<IVideoMinusIconProps> = memo(props => {
  return <VideoMinusSvg {...props} />;
});
