import React, { FC, memo } from 'react';
import Video2DSvg from '../svg/video-2d.svg';

export interface IVideo2DIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Video2DIcon: FC<IVideo2DIconProps> = memo(props => {
  return <Video2DSvg {...props} />;
});
