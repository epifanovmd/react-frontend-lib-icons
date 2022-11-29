import React, { FC, memo } from 'react';
import VideoMarkerSvg from '../svg/video-marker.svg';

export interface IVideoMarkerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoMarkerIcon: FC<IVideoMarkerIconProps> = memo(props => {
  return <VideoMarkerSvg {...props} />;
});
