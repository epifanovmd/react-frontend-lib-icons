import React, { FC, memo } from 'react';
import VideoVintageSvg from '../svg/video-vintage.svg';

export interface IVideoVintageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoVintageIcon: FC<IVideoVintageIconProps> = memo(props => {
  return <VideoVintageSvg {...props} />;
});
