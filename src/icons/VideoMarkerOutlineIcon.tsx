import React, { FC, memo } from 'react';
import VideoMarkerOutlineSvg from '../svg/video-marker-outline.svg';

export interface IVideoMarkerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoMarkerOutlineIcon: FC<IVideoMarkerOutlineIconProps> = memo(props => {
  return <VideoMarkerOutlineSvg {...props} />;
});
