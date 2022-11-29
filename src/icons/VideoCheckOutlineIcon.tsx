import React, { FC, memo } from 'react';
import VideoCheckOutlineSvg from '../svg/video-check-outline.svg';

export interface IVideoCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VideoCheckOutlineIcon: FC<IVideoCheckOutlineIconProps> = memo(props => {
  return <VideoCheckOutlineSvg {...props} />;
});
